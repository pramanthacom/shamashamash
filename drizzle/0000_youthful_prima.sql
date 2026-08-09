CREATE TABLE `sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`starts_at` text NOT NULL,
	`city` text NOT NULL,
	`place` text NOT NULL,
	`fee` text NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`telegram_url` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
