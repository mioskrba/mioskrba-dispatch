import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
if (rootElement) {
  createRoot(rootElement).render(<StrictMode></StrictMode>);
} else {
  console.error("Root element not found");
}
