import { SocialIcon } from 'react-social-icons';
// Footer component
function Footer() {
	return (
		<footer className="Footer">
			<SocialIcon className="Footer-Buttons" url="mailto:info@jules-ferguson.com" bgColor="currentColor"/>
			<SocialIcon className="Footer-Buttons" url="https://www.instagram.com/judy.and.the.junie.queues/" bgColor="currentColor"/>
		</footer>
	);
}

export default Footer;
