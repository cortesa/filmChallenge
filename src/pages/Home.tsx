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
			<div className="home-container">
				<div className='side-bar surface'>
					<Suspense fallback={<p>Cargando Generos...</p>}>
						<GenreList />
					</Suspense>
				</div>
				<div className='content'>
					<div className='surface'>
					{selectedGenres.length === 0 
						? <div>Selecciona una categoria de la lista</div>
						: <div className="home-content">
								{selectedGenres.map(gId => (
									<Suspense>
										<Carousel  key={gId} gId={gId}/>
									</Suspense>
								))} 
							</div>
					}
					</div>
				</div>
			</div>
		</Layout>
	)
}