import clsx from "clsx"

import { CONFIG } from "@/config"
import { MovieDetails } from "@/lib/api/tmdb"

import "./TmdbImg.scss"

type TmdbImgProps = {
  path?: MovieDetails["backdrop_path"]
  alt?: string
  className?: string
}
export function TmdbImg({ path, alt, className }: TmdbImgProps) {
  return path
    ? (
      <img
        className={clsx("tmdb-img", className)}
        src={`${CONFIG.TMDB.IMG_URL}${path}`}
        alt={alt || ""}
        loading="lazy"
        decoding="async"
      />
    )
    : null
}
