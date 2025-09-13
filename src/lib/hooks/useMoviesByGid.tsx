import { useSuspenseQuery } from "@tanstack/react-query";
import { API } from "../api";
import { MovieByGenreResponse } from "../api/tmdb";

type MoviesByGidProps = {
  gId: number,
  activePage: number
}

export const useMoviesByGid = ({ gId, activePage }: MoviesByGidProps) =>  useSuspenseQuery<MovieByGenreResponse>({
  queryKey: ["genre", gId, activePage],
  queryFn: ({ signal }) => API.TMDB.MOVIES_BY_GID({ gId, activePage, signal })
})
