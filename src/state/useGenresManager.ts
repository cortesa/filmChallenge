import { useCallback, useMemo } from "react"
import { useSearchParams } from "react-router-dom"

import { Genre } from "@/lib/api/tmdb"

const GENRE_PARAM = "genre"
const SEPARATOR = ","

export function useGenresManager() {
  const [ searchParams, setSearchParams ] = useSearchParams()

  const selectedGenres = useMemo(() => {
    const current = searchParams.getAll(GENRE_PARAM)[0]?.split(SEPARATOR) || []

    return current.map(gId => Number(gId))
  }, [ searchParams ])

  const addGenre = useCallback((genre: Genre) => {
    const genreId = genre.id.toString()
    const current = searchParams.getAll(GENRE_PARAM)[0]?.split(SEPARATOR) || []
    let next = []
    if (current.includes(genreId)) {
      next = current.filter(gId => gId !== genreId)
    } else {
      next = [ ...current, genreId ].slice(-3)
    }
    const nextParams = new URLSearchParams(searchParams.toString())
    nextParams.delete(GENRE_PARAM)
    if (next.length > 0) nextParams.append(GENRE_PARAM, next.join(SEPARATOR))

    setSearchParams(nextParams)
  }, [ searchParams, setSearchParams ])

  const setGenres = useCallback((ids: number[]) => {
    const next = ids.slice(0, 3).map((id) => id.toString())
    const nextParams = new URLSearchParams(searchParams.toString())
    nextParams.delete(GENRE_PARAM)
    if (next.length > 0) nextParams.append(GENRE_PARAM, next.join(SEPARATOR))

    setSearchParams(nextParams)
  }, [ searchParams, setSearchParams ])

  const resetGenres = useCallback(() => {
    const nextParams = new URLSearchParams(searchParams.toString())
    nextParams.delete(GENRE_PARAM)
    setSearchParams(nextParams)
  }, [ searchParams, setSearchParams ])

  return { selectedGenres, addGenre, resetGenres, setGenres }
}
