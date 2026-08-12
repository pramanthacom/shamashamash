type ScheduleButtonProps = {
  compact?: boolean;
  kind?: "bot" | "group" | "vk";
  label?: string;
  variant?: "primary" | "secondary";
};

export const TELEGRAM_BOT_URL = "https://t.me/Shamashamash_Bot?start=site";
export const TELEGRAM_GROUP_URL = "https://t.me/shamashjorney";
export const VK_BOT_URL = "https://vk.ru/im?sel=-240804334";

export function ScheduleButton({
  compact = false,
  kind = "bot",
  label = "Ближайшие встречи",
  variant = "primary",
}: ScheduleButtonProps) {
  const url = kind === "group" ? TELEGRAM_GROUP_URL : kind === "vk" ? VK_BOT_URL : TELEGRAM_BOT_URL;

  return (
    <a
      className={`button${variant === "secondary" ? " button-secondary" : ""}${compact ? " button-small" : ""}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
