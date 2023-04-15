import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const address = import.meta.env.VITE_CONVEX_URL;
// const address = "https://modest-crocodile-955.convex.cloud"

const convex = new ConvexReactClient(address);

ReactDOM.render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>,
  document.getElementById("root")
);
