// Comments are in English
import { useState, useCallback } from "react"
import { Link } from "react-router-dom"

import { CONFIG } from "@/config"

import { useGenres } from "@/lib/hooks/useGenres"
import { MovieInfo } from "@/lib/api/tmdb"
import { useMoviesByGid } from "@/lib/hooks/useMoviesByGid"

import { TmdbImg } from "@/components/ui/TmdbImg"

import "./carousel.scss"

type CarouselProps = { gId: number }

export function Carousel({ gId }: CarouselProps) {
	const [activePage, setActivePage] = useState(1)

	const { data: genres } = useGenres()
	const { data } = useMoviesByGid({gId, activePage})

	const genre = genres.find((g) => g.id === gId)
	const { page, results: movies, total_pages: totalPages } = data

	const goToPage = useCallback(
		({ page }: { page: number }) => {
			const clamped = Math.max(1, Math.min(page, totalPages))
			setActivePage(clamped)
		},
		[totalPages]
	)

	const goNext = useCallback(() => goToPage({ page: activePage + 1 }), [activePage, goToPage])
	const goPrev = useCallback(() => goToPage({ page: activePage - 1 }), [activePage, goToPage])

	return (
		<div className="carousel-container" aria-label={`Carrusel ${genre?.name ?? ""}`}>
			<div className="carousel-header">
				<h2>{genre?.name}</h2>
				<div className="carousel-controls">
					<button
						type="button"
						onClick={goPrev}
						disabled={activePage <= 1}
						aria-label="Página anterior"
					>
						◀
					</button>
					<span className="carousel-page" aria-live="polite">
						{page} / {totalPages}
					</span>
					<button
						type="button"
						onClick={goNext}
						disabled={activePage >= totalPages}
						aria-label="Página siguiente"
					>
						▶
					</button>
				</div>
			</div>

			<div className="slider-track" role="list">
				{movies.map((movie: MovieInfo) => {
					const src =
						movie?.poster_path
							? `${CONFIG.TMDB.IMG_URL}${movie.poster_path}`
							: undefined
					return (
						<Link to={`/movie/${movie.id}`} className="slider-item" role="listitem" key={movie.id}>
							{src ? (
								<TmdbImg alt={movie.title} path={movie.poster_path} />
							) : (
								<div className="slider-fallback" aria-label="Sin imagen" >
									{movie.title}
									</div>
							)}
						</Link>
					)
				})}
			</div>
		</div>
	)
}