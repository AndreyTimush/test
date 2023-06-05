import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../shared/App";

window.addEventListener("load", () => {
  ReactDOM.hydrateRoot(document.getElementById("react_root"), <App />);
});
