"use client";

import { useEffect, useState } from "react";

type Session = {
  id: number;
  startsAt: string;
  city: string;
  place: string;
  fee: string;
  note: string;
  telegramUrl: string;
};

type ScheduleButtonProps = {
  compact?: boolean;
  label?: string;
};

const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});

export function ScheduleButton({
  compact = false,
  label = "Ближайшие встречи",
}: ScheduleButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    if (!isOpen || status !== "idle") return;
    setStatus("loading");
    fetch("/api/sessions")
      .then(async (response) => {
        if (!response.ok) throw new Error("schedule");
        return (await response.json()) as { sessions: Session[] };
      })
      .then((data) => {
        setSessions(data.sessions);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [isOpen, status]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`button${compact ? " button-small" : ""}`}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        {label}
      </button>

      {isOpen && (
        <div className="schedule-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section
            className="schedule-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="schedule-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="schedule-close"
              type="button"
              aria-label="Закрыть расписание"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <p className="eyebrow">Расписание</p>
            <h2 id="schedule-title">Две ближайшие встречи</h2>

            {status === "loading" && <p className="schedule-state">Загружаем расписание…</p>}
            {status === "error" && (
              <p className="schedule-state">Расписание временно недоступно. Можно уточнить дату в Telegram.</p>
            )}
            {status === "ready" && sessions.length === 0 && (
              <p className="schedule-state">
                Новые даты уточняются. Скоро они появятся здесь и в Telegram-сообществе.
              </p>
            )}

            {sessions.length > 0 && (
              <div className="schedule-list">
                {sessions.map((session) => (
                  <article className="session-card" key={session.id}>
                    <time dateTime={session.startsAt}>{dateFormatter.format(new Date(session.startsAt))}</time>
                    <h3>{session.city}</h3>
                    <dl>
                      <div><dt>Место</dt><dd>{session.place}</dd></div>
                      <div><dt>Оргвзнос</dt><dd>{session.fee}</dd></div>
                    </dl>
                    {session.note && <p>{session.note}</p>}
                    {session.telegramUrl && (
                      <a className="text-link" href={session.telegramUrl} target="_blank" rel="noreferrer">
                        Записаться через Telegram
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
