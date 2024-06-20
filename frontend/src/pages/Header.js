import { Link } from 'react-router-dom';
// Header component

function Header() {
	return (
		<>
		<header>
				<Link to="/" className="Header-Title">
					<h1>Jules</h1>
					<div id="header-blob"></div>
					<h1>Ferguson</h1>
				</Link>
		</header>
		</>
	);
}

export default Header;
