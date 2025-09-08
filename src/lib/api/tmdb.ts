import { CONFIG } from "@/config"

type AuthResponse = {
	success: boolean
}

export async function Authorization({
	signal
}: {
	signal?: AbortSignal
}): Promise<AuthResponse> {
	const res = await fetch(`${CONFIG.TMDB.API_URL}/authentication`, { 
		method: 'GET',
		headers: CONFIG.TMDB.HEADER,
		signal 
	})
	if (!res.ok) throw new Error('HTTP error')
	const data = (await res.json()) as AuthResponse
	return data
}