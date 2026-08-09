"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type Session = {
  id: number;
  startsAt: string;
  city: string;
  place: string;
  fee: string;
  note: string;
  telegramUrl: string;
};

export function ScheduleAdmin() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [message, setMessage] = useState("Загружаем…");

  const load = useCallback(async () => {
    const response = await fetch("/api/sessions?all=1", { cache: "no-store" });
    const data = (await response.json()) as { sessions?: Session[]; error?: string };
    setSessions(data.sessions ?? []);
    setMessage(data.error ?? "");
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setMessage("Сохраняем…");
    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = (await response.json()) as { error?: string };
    if (!response.ok) {
      setMessage(data.error ?? "Не удалось сохранить");
      return;
    }
    form.reset();
    setMessage("Встреча добавлена");
    await load();
  }

  async function remove(id: number) {
    if (!window.confirm("Удалить эту встречу?")) return;
    await fetch(`/api/sessions?id=${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="admin-grid">
      <form className="admin-form" onSubmit={submit}>
        <label>Дата и время<input name="startsAt" type="datetime-local" required /></label>
        <label>Город<input name="city" placeholder="Москва" required /></label>
        <label>Место<input name="place" placeholder="Адрес или название пространства" required /></label>
        <label>Оргвзнос<input name="fee" placeholder="2 500 ₽" required /></label>
        <label>Комментарий<textarea name="note" placeholder="Что взять с собой, длительность…" rows={3} /></label>
        <label>Ссылка на запись в Telegram<input name="telegramUrl" type="url" placeholder="https://t.me/…" /></label>
        <button className="button" type="submit">Добавить встречу</button>
        {message && <p className="admin-message" role="status">{message}</p>}
      </form>

      <div className="admin-sessions">
        <h2>Запланированные встречи</h2>
        {sessions.length === 0 && <p>Пока нет добавленных встреч.</p>}
        {sessions.map((session) => (
          <article key={session.id}>
            <time>{new Date(session.startsAt).toLocaleString("ru-RU")}</time>
            <h3>{session.city} · {session.place}</h3>
            <p>{session.fee}{session.note ? ` · ${session.note}` : ""}</p>
            <button className="admin-delete" type="button" onClick={() => void remove(session.id)}>Удалить</button>
          </article>
        ))}
      </div>
    </div>
  );
}
