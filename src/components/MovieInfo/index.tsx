import { useMovieInfo } from "@/lib/hooks/useMovieInfo"
import { useParams } from "react-router-dom"

import { minutesToHM } from "@/utils"
import { TmdbImg } from "@/components/ui/TmdbImg"
import { Pill } from "@/components/ui/Pill"

import "./MovieInfo.scss"

type GetStatusColorArgs = { status?: string }
export function getStatusColor({ status }: GetStatusColorArgs) {
	if (status === "Released") return "#5CFF5C"
	if (status === "Rumored" || status === "Canceled") return "#FF5C5C"
	if (status === "Post Production") return "#FFD95C"
	return "#9AE1FF"
}

export function MovieInfo() {
	const { mId } = useParams()
	const { data: movie } = useMovieInfo({ mId: Number(mId) })

	if (!movie) return null

	const statusColor = getStatusColor({ status: movie.status })
	const genres = movie.genres ?? []
	const companies = movie.production_companies ?? []

	return (
		<div className="movie-info_container">
			<div className="backdrop">
				<TmdbImg path={movie.backdrop_path} />
			</div>
			<div className="detail">
				<div className="surface">
					<div className="poster">
						<TmdbImg path={movie.poster_path} />
					</div>
					<div className="info">
						<h1>{movie.title}</h1>
						{movie.tagline && (
							<p className="tagline">“{movie.tagline}”</p>
						)}
						<h3>
							🎬 {movie.release_date} | ⏱️ {minutesToHM({ minutes: movie.runtime })}
						</h3>
						<h4>
							⭐ {movie.vote_average?.toFixed(1)} / 10{" "}
							<span>({movie.vote_count} votos)</span>{"  "}
							<span>🌍 {movie.original_language?.toUpperCase()}</span>
						</h4>
						<Pill size="m" color={statusColor} label={movie.status ?? "Unknown"} />
						{genres.length > 0 && (
							<div className="genres">
								<h5 className="genres-title">Genres</h5>
								<div className="pills-container">
									{genres.map((genre) => (
										<Pill key={genre.id} size="s" label={genre.name} />
									))}
								</div>
							</div>
						)}
						<div className="pills-container">
							{movie.homepage && (
								<a href={movie.homepage} target="_blank" rel="noopener noreferrer">
									<Pill size="m" label="🌐 Sitio oficial" hoverColor="#60A5FA" />
								</a>
							)}
						</div>
					</div>
					<p className="desc">{movie.overview}</p>
					<div className="save">
						<Pill
							size="m"
							label="★"
							hoverColor="#FFD95C"/>
					</div>
				</div>
			</div>
		</div>
	)
}