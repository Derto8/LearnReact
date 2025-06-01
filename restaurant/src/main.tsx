import { createRoot } from "react-dom/client";
import { App } from "./components/App.tsx";
import { StrictMode } from "react";

const root = document.getElementById("root");

const reactRoot = createRoot(root!);

reactRoot.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
