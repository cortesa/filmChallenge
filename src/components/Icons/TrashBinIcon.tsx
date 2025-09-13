import { SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
  size?: number
}

export function TrashBinIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size} 
      height={size}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <g >
        <path d="M3 6h18"/>
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        <path d="M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/>
        <path d="M10 10v8M14 10v8"/>
      </g>
    </svg>
  )
}
