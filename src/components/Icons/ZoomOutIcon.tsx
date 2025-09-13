import { SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
  size?: number
}

export function ZoomOutIcon({ size = 20, ...props }: IconProps) {
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
      <circle cx="11" cy="11" r="7"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
       <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  )
}