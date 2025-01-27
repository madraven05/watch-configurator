import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WatchContextProvider } from "./components/context/WatchContext.tsx";

const configuratorContainer = document.getElementById("configurator-container")

createRoot(document.getElementById("configurator-container")!).render(
  <StrictMode>
    <WatchContextProvider>
      <App modelPath={configuratorContainer?.getAttribute("data-model-path") as string}/>
    </WatchContextProvider>
  </StrictMode>
);
