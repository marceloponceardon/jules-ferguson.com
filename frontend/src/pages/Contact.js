// Contact Page Component
import { useNavigate } from 'react-router-dom';

function Contact() {
	const navigate = useNavigate();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Implement form submission

		// Get the form data
		const formData = new FormData(e.target);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message')
		};

		// Log the form data
		console.log(data);

		// Clear the form
		e.target.reset();

		// Redirect
		navigate('/contact/thank-you');
	}


	return (
		<div className="Page" id="contact">
				<span className="Content">
				<div className="Flex-gap"></div>
				<p>
					<h1>Contact Me</h1>
						Want to work with me? <br />
						Let's get in touch and figure it out!
				</p>
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<input type="text" name="name" id="name" placeholder={" "} required />
						<label id="name">Name</label>
					</div>

					<div className="form-group">
						<input type="email" name="email" id="email" placeholder={" "} required />
						<label id="email">Email</label>
					</div>

					<div className="form-group">
						<textarea name="message" id="message" placeholder={" "} required />
						<label id="message">Message</label>
					</div>
					{/* TODO: This is a placeholder for the submit button */}	
					{/* It doesn't actually do anything yet */}
					<input type="submit" value="Submit" />
				</form>
				<div className="Flex-gap"></div>
			</span>
		</div>
	);
}

export default Contact;
