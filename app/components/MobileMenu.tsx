"use client";

import { useState } from "react";

const links = [
  ["#practice", "О практике"],
  ["#roots", "Основа метода"],
  ["#guide", "О ведущем"],
  ["#safety", "Безопасность"],
  ["#contacts", "Контакты"],
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`mobile-nav${isOpen ? " is-open" : ""}`} id="mobile-nav" aria-label="Мобильная навигация">
        {links.map(([href, label]) => (
          <a href={href} key={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
