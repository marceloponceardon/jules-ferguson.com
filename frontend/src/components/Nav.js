import { Link } from 'react-router-dom';
// Navigation bar component

function Nav() {
	return (
		<>
		<nav>
			<div className="Nav-Buttons">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/community-work">Community Work</Link>
				<Link to="/gallery">Gallery</Link>
				<Link to="/cv">CV</Link>
				<Link to="/contact">Contact</Link>
			</div>
			{/* Hamburger menu for mobile and tablet */}
			<input type="checkbox" className="Nav-Hamburger-Input" id="hamburger-input"/>
			<label htmlFor="hamburger-input" className="Nav-Hamburger-Menu">
				<div className="Nav-Hamburger-Sidebar">
					<h3>Menu</h3>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/community-work">Community Work</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/cv">CV</Link>
					<Link to="/contact">Contact</Link>
					<div className="Nav-Hamburger-Sidebar-Overlay"></div>
				</div>
			</label>
			<input type="button" className="Nav-Hamburger-Overlay-Input" id="overlay-input"/>
			<label htmlFor="overlay-input" className="Nav-Hamburger-Overlay">
				<div className="Nav-Hamburger-Overlay"></div>
			</label>
		</nav>
		</>
	);
}

export default Nav;
