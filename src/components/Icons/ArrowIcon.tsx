import { SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
	size?: number
	direction?: "up" | "down" | "left" | "right"
}

const transform: Record<string, string | undefined> = {
	up: "rotate(-90, 12, 12)",
	left: "rotate(180, 12, 12)",
	down: "rotate(90, 12, 12)",
	right: undefined,
}

export function ArrowIcon({ size = 20, direction = "left", ...props }: IconProps) {
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
			<g transform={transform[ direction ]}>
				<path d="M8.12 4.12a1 1 0 0 0 0 1.41L14.59 12l-6.47 6.47a1 1 0 0 0 1.41 1.41l7.18-7.18a1 1 0 0 0 0-1.41L9.53 4.12a1 1 0 0 0-1.41 0z"/>
			</g>
		</svg>
	)
}