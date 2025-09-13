import { Genre } from "@/lib/api/tmdb";
import "./GenreListItem.scss"

type GenreListItemProps = {
  genre: Genre
  selectedGenres: number[]
  addGenre: (genre: Genre) => void
}

export function GenreListItem({ genre, selectedGenres, addGenre }: GenreListItemProps) {
  const isChecked = selectedGenres.some((gId) => gId === genre.id)

  return (
    <label className="genre-item" key={genre.id}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => addGenre( genre )}
      />
      <span className="genre-name">{genre.name}</span>
    </label>
  )
}
