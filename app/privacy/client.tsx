import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../globals.css";
import PrivacyPage from "./page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
);
