// Comentarios en inglés
import { Suspense } from 'react'
import Layout from '../components/layout'
import { GenreList } from '@/components/GenreList'
import { useGenresManager } from '@/state/useGenresManager'
import { Carousel } from '@/components/Carousel'

import './home.scss'

export function Home({}) {

	const {selectedGenres} = useGenresManager()

	return (
		<Layout title="Film Challenge">
		
			<Suspense fallback={<p>Cargando Generos...</p>}>
				<GenreList />
				{selectedGenres.length === 0 
					? <div>Selecciona una categoria de la lista</div>
					: <div className="home-content">
							{selectedGenres.map(gId => (
								<Suspense key={gId} fallback={<p>Cargando Peliculas...</p>}>
									<Carousel  gId={gId}/>
								</Suspense>
							))} 
						</div>
				}
			</Suspense>
		</Layout>
	)
}