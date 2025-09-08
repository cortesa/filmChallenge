export const CONFIG = {
	TMDB: {
		API_URL: 'https://api.themoviedb.org/3',
		TOKEN: import.meta.env.VITE_TMDB_TOKEN,
		HEADER: {
			Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
			'Content-Type': 'application/json;charset=utf-8'
		}
	}
}