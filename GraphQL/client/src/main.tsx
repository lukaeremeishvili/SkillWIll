import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
