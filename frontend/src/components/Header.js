import { Link } from 'react-router-dom';
import { ReactComponent as LogoBlob } from '../content/3.svg';
// Header component

function Header() {
	return (
		<>
		<header>
				<Link to="/" className="Header-Title">
					<div>
						<span id="jules">Jules</span>
						<span id="ferguson">Ferguson</span>
						<span className="SVG-Container">
							<LogoBlob id="blob"/>	
						</span>
					</div>
				</Link>
		</header>
		</>
	);
}

export default Header;
