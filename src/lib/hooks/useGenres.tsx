import { useSuspenseQuery } from "@tanstack/react-query";
import { Genre } from "../api/tmdb";
import { API } from "../api";

export const useGenres = () =>  useSuspenseQuery<Genre[]>({
  queryKey: ["genres"],
  queryFn: ({ signal }) => API.TMDB.GENERS_LIST({ signal })
})
