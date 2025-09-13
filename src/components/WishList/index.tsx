
import { MouseEvent, Suspense, useState } from "react"
import clsx from "clsx"


import { useWishList } from "@/state/useWishList"
import { useOutsideClick } from "@/hooks/useOutsideClick"
import { HeartIcon } from "@/components/Icons/HeartIcon"

import { WhishListItem } from "./WhishListItem"

import "./WishList.scss"

export function WhishList () {
  const {list, count} = useWishList()

  const [isOpen, setOpen] = useState(false)

  const [ , setRef ] = useOutsideClick(() => setOpen(false))

  const toggleSurface = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setOpen((prev) => !prev)
  }

  return (
    <div 
    ref={setRef}
    className="whish-list"
    onClick={toggleSurface}>
      <div 
        className={clsx(
        "surface",
        isOpen && "open"
      )}>
        <p className="cross" onClick={toggleSurface}>❌</p>
        <p className="stars"><span><HeartIcon size={24}/></span><span>{count}</span></p>
        <ul className="list">
          {list.map(id => (
            <Suspense key={id}>
              <WhishListItem mId={id}/>
            </Suspense>
          ))}
        </ul>
    
      </div>
    </div>
  )
}
