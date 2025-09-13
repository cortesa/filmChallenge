import { CONFIG } from "@/config"



const apiQuery = async (endpoint: string, signal?: AbortSignal) => await fetch(
	`${CONFIG.TMDB.API_URL}/${endpoint}`, 
	{ 
		method: "GET",
		headers: CONFIG.TMDB.HEADER,
		signal 
	}
)
	
type AuthResponse = {
	success: boolean
}

	export async function authorization({
	signal
}: {
	signal?: AbortSignal
}): Promise<AuthResponse> {
	const res = await apiQuery("Authorization", signal)
	if (!res.ok) throw new Error("HTTP error")
	const data = (await res.json()) as AuthResponse

	return data
}

export type Genre = {
	id: number,
	name: string
}

	export async function genersList({
	signal
}: {
	signal?: AbortSignal
}): Promise<Genre[]> {
	const res = await apiQuery("genre/movie/list?language=en", signal)
	if (!res.ok) throw new Error("HTTP error")
	const data = (await res.json()) as Record<"genres",Genre[]>
	const genres = data.genres

	return genres
}

export type MovieInfo = {
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string // ISO date string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export type MovieByGenreResponse = {
	page: number,
	results: MovieInfo[],
	total_pages: number,
	total_results: number
}

	export async function moviesByGid({
	gId, 
	activePage,
	signal
}:{
	gId: number,
	activePage: number,
	signal?: AbortSignal
}): Promise<MovieByGenreResponse> {
	const res = await apiQuery(`discover/movie?include_adult=false&include_video=false&page=${activePage}&sort_by=popularity.desc&with_genres=${gId}`, signal)
	if (!res.ok) throw new Error("HTTP error")
	const data = await res.json()
	
	return data
}


export type MovieDetails = {
	adult: boolean
	backdrop_path: string | null
	belongs_to_collection: {
		id: number
		name: string
		poster_path: string | null
		backdrop_path: string | null
	} | null
	budget: number
	genres: {
		id: number
		name: string
	}[]
	homepage: string | null
	id: number
	imdb_id: string | null
	origin_country: string[]
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	production_companies: {
		id: number
		logo_path: string | null
		name: string
		origin_country: string
	}[]
	production_countries: {
		iso_3166_1: string
		name: string
	}[]
	release_date: string // ISO date
	revenue: number
	runtime: number | null
	spoken_languages: {
		english_name: string
		iso_639_1: string
		name: string
	}[]
	status: string
	tagline: string | null
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

	export async function movieInfo({
	mId,
	signal
}:{
	mId: number, 
	signal?: AbortSignal
}): Promise<MovieDetails> {
	const res = await apiQuery(`movie/${mId}`, signal)
	if (!res.ok) throw new Error("HTTP error")
	const data = await res.json()
	
	return data
}
