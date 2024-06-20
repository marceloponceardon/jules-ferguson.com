import { Link } from 'react-router-dom';
import { ReactComponent as Blob5 } from '../content/5.svg';
import { ReactComponent as Blob7 } from '../content/7.svg';
import { ReactComponent as Blob9 } from '../content/9.svg';
import { ReactComponent as Blob11 } from '../content/11.svg';
// Navigation bar component

function Nav() {
	return (
		<>
		<nav>
			<div className="Nav-Buttons">
				<Link to="/" id="nav-home">
					<h1>About</h1>
					<span className="SVG-Container">
						<Blob5 id="blob5"/>
					</span>
				</Link>
				<Link to="/selected-works" id="nav-selected-work">
					<h1>Selected Works</h1>
					<span className="SVG-Container">
						<Blob7 id="blob7"/>
					</span>
				</Link>
				<Link to="/cv" id="nav-cv">
					<h1>CV</h1>
					<span className="SVG-Container">
						<Blob9 id="blob9"/>
					</span>
				</Link>
				<Link to="/contact" id="nav-contact">
					<h1>Contact</h1>
					<span className="SVG-Container">
						<Blob11 id="blob11"/>
					</span>
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
