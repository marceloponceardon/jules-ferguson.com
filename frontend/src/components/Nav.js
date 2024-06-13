import '../App.css';
import { Outlet, Link } from 'react-router-dom';
// Navigation bar component

function Nav() {
	// Hide all other components other than home first
	return (
		<>
		<nav className="Navigation">
			<div className="Nav-Buttons">
				<Link to="/" id="Title">Jules Ferguson</Link>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/community-work">Community Work</Link>
				<Link to="/gallery">Gallery</Link>
				<Link to="/cv">CV</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>

		<Outlet />
		</>
	);
}

export default Nav;
