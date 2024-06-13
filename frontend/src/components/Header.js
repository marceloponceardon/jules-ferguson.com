import { Link } from 'react-router-dom';
// Header component

function Header() {
	return (
		<>
		<header>
				<Link to="/" className="Header-Title">
					<h1>Jules Ferguson</h1>
				</Link>
		</header>
		</>
	);
}

export default Header;
