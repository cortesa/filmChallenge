import { NavLink } from "react-router-dom"

export const NavigationBar = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
		</nav>)
}