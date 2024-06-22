// Contact Page Component



function Contact() {
	return (
		<div className="Page" id="contact">
				<span className="Content">
				<div className="Flex-gap"></div>
				<p>
					<h1>Contact Me</h1>
						Want to work with me? <br />
						Let's get in touch and figure it out!
				</p>
				<form className="contact-form">
					<div className="form-group">
						<input type="text" name="name" id="name" placeholder={" "} />
						<label id="name">Name</label>
					</div>

					<div className="form-group">
						<input type="text" name="email" id="email" placeholder={" "} />
						<label id="email">Email</label>
					</div>

					<div className="form-group">
						<textarea name="message" id="message" placeholder={" "} />
						<label id="message">Message</label>
					</div>
			
					<input type="submit" value="Submit" />
				</form>
				<div className="Flex-gap"></div>
			</span>
		</div>
	);
}

export default Contact;
