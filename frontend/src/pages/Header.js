import { Link } from 'react-router-dom';
import { ReactComponent as LogoBlob } from '../content/5.svg';
// Header component

function Header() {
	return (
		<>
		<header>
				<Link to="/" className="Header-Title">
					<span>
						<h1 id="jules">Jules</h1>
						<h1 id="ferguson">Ferguson</h1>
						<div className="SVG-Container">
							<LogoBlob id="blob"/>	
						</div>
					</span>
				</Link>
		</header>
		</>
	);
}

export default Header;
