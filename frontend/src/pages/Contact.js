// Contact Page Component



function Contact() {
	return (
		<div className="Page" id="contact">
				<span className="Content">
				<div className="Flex-gap"></div>
				<p>
					<h2>Contact Me</h2>
					Insert some flavour text here Jules.
				</p>
				<form className="contact-form">
					<input type="text" name="first-name" id="first-name" />
					<label id="first-name">First Name</label>
	
					<input type="text" name="last-name" id="last-name" />
					<label id="last-name">Last Name</label>

					<input type="text" name="email" id="email" />
					<label id="email">Email</label>

					<textarea name="message" id="message" rows="5" />
					<label id="message">Message</label>
			
					<input type="submit" value="Submit" />
				</form>
				<div className="Flex-gap"></div>
			</span>
		</div>
	);
}

export default Contact;
