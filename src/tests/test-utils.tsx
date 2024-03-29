import React, { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { GlobalFeatures } from "../components/global-features.js"

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return <GlobalFeatures>{children}</GlobalFeatures>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
