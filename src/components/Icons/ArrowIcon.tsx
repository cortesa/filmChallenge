import { SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
	size?: number
}

export function ArrowIcon({ size = 20, ...props }: IconProps) {
	return (
		<svg 
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size} 
			height={size}
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			strokeWidth="4"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}>
			<path d="M8.12 4.12a1 1 0 0 0 0 1.41L14.59 12l-6.47 6.47a1 1 0 0 0 1.41 1.41l7.18-7.18a1 1 0 0 0 0-1.41L9.53 4.12a1 1 0 0 0-1.41 0z"/>
		</svg>
	)
}