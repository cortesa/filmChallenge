import { CONFIG } from "@/config"
import { MovieDetails } from "@/lib/api/tmdb"

import "./TmdbImg.scss"

type TmdbImgProps = {
  path?: MovieDetails["backdrop_path"]
  alt?: string
}
export function TmdbImg({ path, alt }:TmdbImgProps) {
  return path
    ? (
      <img
        className="tmdb-img"
        src={`${CONFIG.TMDB.IMG_URL}${path}`}
        alt={alt || ""}
        loading="lazy"
        decoding="async"
      />
    )
    : null
}
