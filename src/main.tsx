import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WatchContextProvider } from "./components/context/WatchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WatchContextProvider>
      <App />
    </WatchContextProvider>
  </StrictMode>
);
