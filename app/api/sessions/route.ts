import { env } from "cloudflare:workers";
import { asc, eq, gte } from "drizzle-orm";
import { getChatGPTUser } from "../../chatgpt-auth";
import { getDb } from "../../../db";
import { sessions } from "../../../db/schema";

type SessionPayload = {
  startsAt?: string;
  city?: string;
  place?: string;
  fee?: string;
  note?: string;
  telegramUrl?: string;
};

function isAdmin(email: string | undefined) {
  const runtimeEnv = env as unknown as { ADMIN_EMAIL?: string };
  return Boolean(email && runtimeEnv.ADMIN_EMAIL && email === runtimeEnv.ADMIN_EMAIL);
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const adminView = url.searchParams.get("all") === "1";
    if (adminView) {
      const user = await getChatGPTUser();
      if (!isAdmin(user?.email)) {
        return Response.json({ error: "Доступ запрещён" }, { status: 403 });
      }
    }

    const db = getDb();
    const rows = adminView
      ? await db.select().from(sessions).orderBy(asc(sessions.startsAt)).limit(30)
      : await db
          .select()
          .from(sessions)
          .where(gte(sessions.startsAt, new Date().toISOString()))
          .orderBy(asc(sessions.startsAt))
          .limit(2);

    return Response.json({ sessions: rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось загрузить расписание";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!isAdmin(user?.email)) {
    return Response.json({ error: "Доступ запрещён" }, { status: 403 });
  }

  const payload = (await request.json()) as SessionPayload;
  const startsAt = payload.startsAt?.trim() ?? "";
  const city = payload.city?.trim() ?? "";
  const place = payload.place?.trim() ?? "";
  const fee = payload.fee?.trim() ?? "";

  if (!startsAt || !city || !place || !fee) {
    return Response.json(
      { error: "Заполните дату, город, место и оргвзнос" },
      { status: 400 },
    );
  }

  const db = getDb();
  const [created] = await db
    .insert(sessions)
    .values({
      startsAt: new Date(startsAt).toISOString(),
      city,
      place,
      fee,
      note: payload.note?.trim() ?? "",
      telegramUrl: payload.telegramUrl?.trim() ?? "",
      createdAt: new Date().toISOString(),
    })
    .returning();

  return Response.json({ session: created }, { status: 201 });
}

export async function DELETE(request: Request) {
  const user = await getChatGPTUser();
  if (!isAdmin(user?.email)) {
    return Response.json({ error: "Доступ запрещён" }, { status: 403 });
  }

  const id = Number(new URL(request.url).searchParams.get("id"));
  if (!Number.isInteger(id) || id < 1) {
    return Response.json({ error: "Некорректный идентификатор" }, { status: 400 });
  }

  await getDb().delete(sessions).where(eq(sessions.id, id));
  return Response.json({ ok: true });
}
