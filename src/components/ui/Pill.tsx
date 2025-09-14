import { ReactElement, useState } from "react"

import "./Pill.scss"

type PillProps = {
  label: ReactElement | string
  size?: "s" | "m" | "l"
  color?: string
  hoverColor?: string
}

export function Pill({ color, label, size = "m", hoverColor }: PillProps) {
  const [ isHovering, setHovering ] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovering(!!hoverColor)}
      onMouseLeave={() => setHovering(false)}
      className={`pill pill--${size} ${isHovering ? "pill--hover" : ""}`}
      style={{
        color: isHovering ? hoverColor : color,
      }}
    >
      {label}
    </div>
  )
}
