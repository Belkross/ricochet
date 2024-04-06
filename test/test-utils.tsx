import React, { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { GlobalFeatures } from "../src/component/global-features.js"
import userEvent from "@testing-library/user-event"

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return <GlobalFeatures>{children}</GlobalFeatures>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render, userEvent }
