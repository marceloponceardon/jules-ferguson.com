import { Link } from 'react-router-dom';
// Header component

function Header() {
	return (
		<>
		<header className="Header">
				<Link to="/" id="Title">
					<h1>Jules Ferguson</h1>
				</Link>
		</header>
		</>
	);
}

export default Header;
