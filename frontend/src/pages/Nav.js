import { Link } from 'react-router-dom';
// Navigation bar component

function Nav() {
	return (
		<>
		<nav>
			<div className="Nav-Buttons">
				<Link to="/" id="nav-home">
					<h1>About</h1>
				</Link>
				<Link to="/selected-work" id="nav-selected-work">
					<h1>Selected Work</h1>
				</Link>
				<Link to="/cv" id="nav-cv">
					<h1>CV</h1>
				</Link>
				<Link to="/contact" id="nav-contact">
					<h1>Contact</h1>
				</Link>
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
			<div className="Nav-Hamburger-Overlay"></div>
		</nav>
		</>
	);
}

export default Nav;
