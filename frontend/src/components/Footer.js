import { SocialIcon } from 'react-social-icons';
// Footer component
function Footer() {
	return (
		<footer className="Footer">
			<SocialIcon className="Footer-Buttons" url="mailto:info@jules-ferguson.com" bgColor="currentColor"/>
			<SocialIcon className="Footer-Buttons" url="https://www.instagram.com/judy.and.the.junie.queues/" bgColor="currentColor"/>
			<SocialIcon className="Footer-Buttons" bgColor="currentColor" url="https://www.linkedin.com/in/jules-ferguson-523272192/"/>
		</footer>
	);
}

export default Footer;
