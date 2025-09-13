import { SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
	size?: number
}

export function DeselctAllIcon({ size = 20, ...props }: IconProps) {
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
		  <circle cx="12" cy="12" r="9" />
  		<line x1="8" y1="16" x2="16" y2="8" />
		</svg>
	)
}