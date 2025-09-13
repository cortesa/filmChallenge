// Comments in English
import { JSX } from 'react'
import { useGenresManager } from '@/state/useGenresManager'
import { useGenres } from '@/lib/hooks/useGenres'

import './GenereList.scss'
import { DeselctAllIcon } from '../Icons'

export function GenreList({}: {}): JSX.Element {
	const { data } = useGenres()

	const { selectedGenres, addGenre, resetGenres } = useGenresManager()

	return (
		<div className="genere-list">
			<div className="title">
				<h2>Genres</h2>
				<button onClick={resetGenres}>
					<DeselctAllIcon size={24}/>
				</button>
			</div>
			<div className="list">
				{data.map((genre) => (
					<label className="item" key={genre.id} style={{ display: 'block', margin: '4px 0' }}>
						<input
							type="checkbox"
					 		checked={ selectedGenres.some( gId => gId === genre.id ) }
							onChange={() => addGenre(genre)}
						/>
						<span style={{ marginLeft: '8px' }}>{genre.name}</span>
					</label>
				))}
			</div>
		</div>
	)
}