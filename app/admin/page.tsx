import { env } from "cloudflare:workers";
import { requireChatGPTUser } from "../chatgpt-auth";
import { ScheduleAdmin } from "../components/ScheduleAdmin";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");
  const runtimeEnv = env as unknown as { ADMIN_EMAIL?: string };

  if (!runtimeEnv.ADMIN_EMAIL || user.email !== runtimeEnv.ADMIN_EMAIL) {
    return (
      <main className="admin-page">
        <a className="wordmark" href="/">Шамаш</a>
        <h1>Нет доступа</h1>
        <p>Управление расписанием доступно только владельцу сайта.</p>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <div className="admin-header">
        <div>
          <a className="wordmark" href="/">Шамаш</a>
          <p className="eyebrow">Служебная страница</p>
          <h1>Расписание встреч</h1>
          <p>Добавьте дату один раз — две ближайшие встречи автоматически появятся на главной.</p>
        </div>
        <a className="text-link" href="/">Вернуться на сайт</a>
      </div>
      <ScheduleAdmin />
    </main>
  );
}
