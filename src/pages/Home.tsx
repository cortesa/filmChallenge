// Comentarios en inglés
import { Suspense } from 'react'
import Layout from '../components/layout'
import { readResource } from '@/lib/resourcesManager'

function PokemonCard({}) {
	// Avoid server fetch: render placeholder on SSR
	if (import.meta.env.SSR) {
		return <div>Loading on client…</div>
	}

	const data = readResource({
		key: 'pokemon:pikachu',
		load: () => {
			const ctrl = new AbortController()
			return fetchPokemon({ signal: ctrl.signal })
		}
	})

	return (
		<div>
			<h2>{data.name}</h2>
			<p>Height: {data.height}</p>
		</div>
	)
}

export function Home({}) {
	return (
		<Layout>
			<h1>Home Page</h1>
			<Suspense fallback={<p>Cargando Pokémon…</p>}>
				<PokemonCard />
			</Suspense>
		</Layout>
	)
}