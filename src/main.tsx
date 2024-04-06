import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { GlobalFeatures } from "#component/global-features"
import { initializeAppState } from "./store/initialize-app-state"

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalFeatures initialAppState={initializeAppState()}>
      <App />
    </GlobalFeatures>
  </React.StrictMode>
)
