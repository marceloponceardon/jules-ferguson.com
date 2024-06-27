// Contact Page Component
import { useNavigate } from 'react-router-dom';

function Contact() {
	const navigate = useNavigate();
	
	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior
	
		// Get the form data
		const formData = new FormData(e.target);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message')
		};
	
		try {
			// Make api call
			if (process.env.NODE_ENV === 'development') {
				console.log('URI:', process.env.REACT_APP_BACKEND_URL + '/contact');
				console.log('Form data:', data);
			}
			
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
	
			if (response.ok) {
				// Clear the form
				e.target.reset();
	
				// Redirect
				navigate('/contact/thank-you');
			} else {
				// Handle error response
				const errorData = await response.json();
				console.error('Error:', errorData);
				// Optionally, display error message to the user
			}
		} catch (error) {
			// Handle fetch error
			console.error('Fetch error:', error);
			// Optionally, display error message to the user
		}
	};

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
