type ScheduleButtonProps = {
  compact?: boolean;
  label?: string;
};

export const TELEGRAM_BOT_URL = "https://t.me/Shamashamash_Bot?start=site";

export function ScheduleButton({
  compact = false,
  label = "Ближайшие встречи",
}: ScheduleButtonProps) {
  return (
    <a
      className={`button${compact ? " button-small" : ""}`}
      href={TELEGRAM_BOT_URL}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
