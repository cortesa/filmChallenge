// Comments are in English
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

import { CONFIG } from "@/config"

import { useGenres } from "@/lib/hooks/useGenres"
import { MovieInfo } from "@/lib/api/tmdb"
import { useMoviesByGid } from "@/lib/hooks/useMoviesByGid"

import { clamp } from "@/utils" 

import { TmdbImg } from "@/components/ui/TmdbImg"

import "./carousel.scss"
import { CarouselHeader } from "./CarouselHeader"
import { DotNav } from "./DotNav"
import { ArrowIcon } from "../Icons"

type CarouselProps = { gId: number }

export function Carousel({ gId }: CarouselProps) {
  const { data: genres } = useGenres()
  const { data } = useMoviesByGid({ gId, activePage: 1 })

  const genre = genres.find((g) => g.id === gId)
  const { results: movies } = data

  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || movies.length === 0) return

    const safeIndex = clamp(currentIndex, 0, movies.length - 1)
    if (safeIndex !== currentIndex) {
      setCurrentIndex(safeIndex)
      return
    }

    const items = track.querySelectorAll<HTMLElement>(".slider-item")
    const target = items[safeIndex]
    if (!target) return

    track.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    })
  }, [currentIndex, movies.length])


  return (
    <div className="carousel-container" aria-label={`Carousel: ${genre?.name ?? ""}`}>
      <CarouselHeader genreName={genre?.name} />

        <button
          className="carousel-scroll left"
          aria-label="Scroll left"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}>
          <ArrowIcon direction="left"/>
        </button>

        <button
          className="carousel-scroll right"
          aria-label="Scroll right"
          disabled={currentIndex === movies.length - 1}
          onClick={() => setCurrentIndex(currentIndex + 1)}>
          <ArrowIcon direction="right"/>
        </button>

        <div className="slider-track" ref={trackRef} role="list">
          {movies.map((movie: MovieInfo) => {
            const src = movie?.poster_path
              ? `${CONFIG.TMDB.IMG_URL}${movie.poster_path}`
              : undefined
            return (
              <Link
                to={`/movie/${movie.id}`}
                className="slider-item"
                role="listitem"
                key={movie.id}
              >
                {src ? (
                  <TmdbImg alt={movie.title} path={movie.poster_path} />
                ) : (
                  <div className="slider-fallback" aria-label="No image">
                    {movie.title}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
        <DotNav
          count={movies.length}
          currentIndex={currentIndex}
          onSelect={(idx) => setCurrentIndex(idx)}
        />
      </div>
  )
}
