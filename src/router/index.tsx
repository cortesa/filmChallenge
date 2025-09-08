import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { useEffect, useState } from "react"

export const Router = () => {
	// const [hydrated, setHydrated] = useState(false)

	// useEffect(() => { setHydrated(true) }, [])
	// if (!hydrated) return (
	// 	<div>Loading...</div>
	// )
	
	return (
		<Routes>
			<Route index path="/" element={<Home/>} />
			<Route path="/about" element={<About/>} />
			<Route path="*" element={<div>Not Found</div>} />
		</Routes>
	)
}