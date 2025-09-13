import { JSX } from "react"
import { useGenresManager } from "@/state/useGenresManager"
import { useGenres } from "@/lib/hooks/useGenres"

import { DeselctAllIcon } from "../Icons"
import { MobileGenres } from "./MobileGenres"
import { GenreListItem } from "./GenreListItem"

import "./GenereList.scss"

export function GenreList(): JSX.Element {
  const { data } = useGenres()

  const { selectedGenres, addGenre, resetGenres } = useGenresManager()

  return (
    <div className="genere-list">
    <MobileGenres data={data}/>
    <div className="desktop-list">
      <div className="title">
        <h2>Genres</h2>
        <button onClick={resetGenres}>
          <DeselctAllIcon size={24}/>
        </button>
      </div>
      <div className="list">
        {data.map((genre) => (
          <GenreListItem 
            key={genre.id}
            genre={genre}
            selectedGenres={selectedGenres}
            addGenre={addGenre}/>
        ))}
      </div>
    </div>
    </div>
  )
}
