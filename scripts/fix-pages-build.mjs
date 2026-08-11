import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const dist = "pages-dist";
const generated = join(dist, "pages-src");

await rename(join(generated, "index.html"), join(dist, "index.html"));
await mkdir(join(dist, "privacy"), { recursive: true });
await rename(join(generated, "privacy", "index.html"), join(dist, "privacy", "index.html"));
await rm(generated, { recursive: true, force: true });

const indexPath = join(dist, "index.html");
const privacyPath = join(dist, "privacy", "index.html");
const indexHtml = await readFile(indexPath, "utf8");
const privacyHtml = await readFile(privacyPath, "utf8");
await writeFile(indexPath, indexHtml.replaceAll("../assets/", "./assets/"));
await writeFile(privacyPath, privacyHtml.replaceAll("../../assets/", "../assets/"));

await cp(join(dist, "index.html"), "index.html");
await mkdir("privacy", { recursive: true });
await cp(join(dist, "privacy", "index.html"), join("privacy", "index.html"));
await rm("assets", { recursive: true, force: true });
await cp(join(dist, "assets"), "assets", { recursive: true });

for (const asset of ["footer-symbols-desktop.png", "footer-symbols-mobile.png", "meeting-ritual-v1.png"]) {
  await cp(join(dist, asset), asset);
}
