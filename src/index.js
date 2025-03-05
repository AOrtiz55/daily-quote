import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// import Heading from "./Heading";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    
    <App />
  </StrictMode>
);
