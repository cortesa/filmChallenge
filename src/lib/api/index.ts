import { authorization, genersList, movieInfo, moviesByGid } from "./tmdb";

export const API = {
	TMDB: {
		AUTH: authorization,
		GENERS_LIST: genersList,
		MOVIES_BY_GID: moviesByGid,
		MOVIE_INFO: movieInfo
	}
}