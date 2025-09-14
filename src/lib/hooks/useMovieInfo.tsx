import { useSuspenseQuery } from "@tanstack/react-query";

import { API } from "../api";

type MovieProps = {
  mId: number
}

export const useMovieInfo = ({ mId }: MovieProps) =>  useSuspenseQuery({
  queryKey: [ "movie", mId ],
  queryFn: ({ signal }) => API.TMDB.MOVIE_INFO({ mId, signal })
})
