import { SocialIcon } from 'react-social-icons';
// Footer component
function Footer() {
	return (
		<footer>
			<SocialIcon className="Footer-Buttons" bgColor="currentColor" url="mailto:info@jules-ferguson.com" />
			<SocialIcon className="Footer-Buttons" bgColor="currentColor" url="https://www.instagram.com/judy.and.the.junie.queues/" />
			<SocialIcon className="Footer-Buttons" bgColor="currentColor" url="https://www.linkedin.com/in/jules-ferguson-523272192/" />
		</footer>
	);
}

export default Footer;
