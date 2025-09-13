import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"

import { Router } from "./router"

interface RenderProps {
  path: string
}

export function render({ path }: RenderProps) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </StrictMode>,
  )
  return { html }
}
