import { useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import { useMovieInfo } from "@/lib/hooks/useMovieInfo";
import { getStatusColor, minutesToHM } from "@/utils";
import { useWishList } from "@/state/useWishList";
import { TmdbImg } from "@/components/ui/TmdbImg";
import { Pill } from "@/components/ui/Pill";

import { HeartIcon } from "../Icons/HeartIcon";
import { ZoomInIcon, ZoomOutIcon } from "../Icons";

import "./MovieInfo.scss";

export function MovieInfo() {
  const [fullScreen, setFullScreen] = useState(false)
  const { mId } = useParams()
  const { data: movie } = useMovieInfo({ mId: Number(mId) })
  const { isIn, toggle } = useWishList()

  if (!movie) return null

  const statusColor = getStatusColor({ status: movie.status })
  const genres = movie.genres ?? []

  return (
    <div className="movie-info_container">
      <div className={clsx("full-screen", fullScreen ? "show" : "hide")}>
        <div className="full-poster">
          <ZoomOutIcon className="zoom out" size={25} onClick={()=>setFullScreen(false)}/>
          <TmdbImg path={movie.poster_path} />
        </div>
      </div>
      <div className="backdrop">
        <TmdbImg path={movie.backdrop_path} />
      </div>
      <div className="detail">
        <div className="surface">
          <div className="poster">
            <ZoomInIcon className="zoom" size={25} onClick={()=>setFullScreen(true)}/>
            <TmdbImg path={movie.poster_path} />
          </div>
          {/* <div className="info"> */}

          <div className="info-title">
            <h1>{movie.title}</h1>
            {movie.tagline && (
              <p className="tagline">“{movie.tagline}”</p>
            )}
          </div>
          <div className="info-details">
            <h3>
              🎬 {movie.release_date} | ⏱️ {minutesToHM({ minutes: movie.runtime })}
            </h3>
            <h4>
              ⭐️ {movie.vote_average?.toFixed(1)} / 10{" "}
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
            
          {/* </div> */}
          <p className="desc">{movie.overview}</p>
          <div className="save" onClick={() => toggle( mId )}>
            <Pill
              size="m"
              label={<HeartIcon className={isIn( mId ) ? "red-heart" : ""}/>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
