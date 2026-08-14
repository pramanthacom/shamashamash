"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "shamash-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(STORAGE_KEY) !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <aside className="cookie-notice" aria-label="Уведомление о cookies">
      <p>
        Сайт использует технические cookies, локальное хранилище и Яндекс.Метрику для анализа посещаемости.
        Подробнее — в <a href="/privacy">политике конфиденциальности</a>.
      </p>
      <button
        className="button button-small"
        type="button"
        onClick={() => {
          localStorage.setItem(STORAGE_KEY, "accepted");
          setVisible(false);
        }}
      >
        Понятно
      </button>
    </aside>
  );
}
