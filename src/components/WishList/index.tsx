
import { MouseEvent, useRef, useState } from 'react'
import './WishList.scss'
import clsx from 'clsx'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { HeartIcon } from '../Icons/HeartIcon'

const FILMS_ID = [1234821,44896, 911430]

export function WhishList () {
	const [isOpen, setOpen] = useState(false)

	const [ _ref, setRef ] = useOutsideClick(() => setOpen(false))

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
				<p className="stars"><span><HeartIcon size={24}/></span><span>2</span></p>
				<ul className="list">
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
		
			</div>
		</div>
	)
}