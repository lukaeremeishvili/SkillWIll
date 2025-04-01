import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./query/client"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}> 
      <App />
    </QueryClientProvider>
  </StrictMode>
);
