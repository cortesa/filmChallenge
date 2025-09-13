import { SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
  size?: number
}

export function HeartIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={size} 
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.59 4.81 14.26 4 16 4 18.5 4 20.5 6 20.5 8.5c0 3.78-3.4 6.86-8.05 11.54L12 21.35z"/>
    </svg>
  )
}

