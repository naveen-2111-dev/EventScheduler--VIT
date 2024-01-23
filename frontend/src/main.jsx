import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context/context.jsx";

const activeChain = "ethereum";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}activeChain={activeChain}>
      <StateContextProvider>
          <App />
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
