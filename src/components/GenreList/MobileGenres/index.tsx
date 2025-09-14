import { MouseEvent, useState } from "react"
import clsx from "clsx"

import { useOutsideClick } from "@/hooks/useOutsideClick"
import { Genre } from "@/lib/api/tmdb"
import { useGenresManager } from "@/state/useGenresManager"
import { ArrowIcon, DeselctAllIcon } from "@/components/Icons"

import { GenreListItem } from "../GenreListItem"

import "./MobileGenres.scss"

type MobileGenresProps = {
  data:  Genre[]
}

export function MobileGenres ({ data }: MobileGenresProps) {
  const { selectedGenres, addGenre, resetGenres } = useGenresManager()

  const [ isOpen, setOpen ] = useState(false)

  const [ , setRef ] = useOutsideClick(() => setOpen(false))

  const toggleSurface = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setOpen((prev) => !prev)
  }

  return (
    <div 
      ref={setRef}
      className="mobile-genres"
      onClick={toggleSurface}>
      <div 
        className={clsx(
          "surface",
          isOpen && "open"
        )}>
        <p className="cross" onClick={toggleSurface}><ArrowIcon direction="up"/></p>
        <div className="title">
          <h3>Genres</h3>
          <button onClick={resetGenres}>
            <DeselctAllIcon size={24}/>
          </button>
        </div>
        <ul className="list">
          {data.map((genre) => (
            <GenreListItem 
              key={genre.id}
              genre={genre}
              selectedGenres={selectedGenres}
              addGenre={addGenre}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
