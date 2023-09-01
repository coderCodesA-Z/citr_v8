import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// HashRouter for some use cases, not good for SEOs
// routing and accessibility is hard when they go together
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter> {/** Global Context Provider for React-Router-DOM */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
