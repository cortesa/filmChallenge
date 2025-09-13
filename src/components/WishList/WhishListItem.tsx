import { MouseEvent, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"

import { useMovieInfo } from "@/lib/hooks/useMovieInfo"
import { Id, useWishList } from "@/state/useWishList"
import { getStatusColor } from "@/utils"

import { TmdbImg } from "../ui/TmdbImg"
import { TrashBinIcon } from "../Icons"
import { Pill } from "../ui/Pill"

import "./WishListItem.scss"

type WishListItemProps = { mId: Id }

export function WhishListItem({ mId }: WishListItemProps) {
  const location = useLocation()
  const { toggle } = useWishList()
  const { data: movie } = useMovieInfo({ mId } as { mId: number })

  const removeMovie = useCallback(
    (e: MouseEvent<SVGElement>) => {
      e.stopPropagation()
      toggle(mId)
    },
    [mId, toggle]
  )

  const isMoviePage = location.pathname.startsWith("/movie/")
  const statusColor = getStatusColor({ status: movie.status })

  if (!movie) return null

  return (
    <li className="whish-list_item">
      <Link to={`/movie/${movie.id}`} replace={isMoviePage}>
        <div className="image">
          <TmdbImg path={movie.poster_path} />
        </div>
        <div className="title">{movie.title}</div>
        <div className="details">
          <h4>⭐️ {movie.vote_average?.toFixed(1)} / 10</h4>
          <Pill size="s"  color={statusColor} label={movie.status ?? "Unknown"} />
        </div>
      </Link>
      <TrashBinIcon className="trash" onClick={removeMovie} />
    </li>
  )
}
