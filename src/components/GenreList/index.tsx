// Comments in English
import { JSX } from 'react'
import { useGenresManager } from '@/state/useGenresManager'
import { useGenres } from '@/lib/hooks/useGenres'

export function GenreList({}: {}): JSX.Element {
	const { data } = useGenres()

	const { selectedGenres, addGenre, resetGenres } = useGenresManager()

	return (
		<div>
			<h2>Genres</h2>
			<div>
				<div>
					{data.map((genre) => (
						<label key={genre.id} style={{ display: 'block', margin: '4px 0' }}>
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
			<button onClick={resetGenres}>Reset All</button>
		</div>
	)
}