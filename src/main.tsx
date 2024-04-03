import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { GlobalFeatures } from "#component/global-features"

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalFeatures>
      <App />
    </GlobalFeatures>
  </React.StrictMode>
)
