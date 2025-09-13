
import './CarouselHeader.scss'

type CarouselHeaderProps = {
	genreName?: string
}

export function CarouselHeader({
	genreName,
}: CarouselHeaderProps) {
	return (
		<div className="carousel-header">
			<h2>{genreName}</h2>
		</div>
	)
}