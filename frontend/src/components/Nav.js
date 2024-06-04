import '../App.css';

// Navigation bar component

// Navigate to the 'page' with the given name
function Navigate(name) {
	console.log('navigated to: ' + name);
	const components = document.getElementsByClassName("App-component");
	for (let i = 0; i < components.length; i++) {
		components[i].style.display = "none";
	}
	const selected = document.getElementById(name);
	selected.style.display = "block";

}

function Nav() {
	return (
		<nav className="Navigation">
			<div className="Nav-Buttons">
				<a id="Title" href="#home" onClick={() => Navigate("Home")}>Jules Ferguson</a>
				<a href="#home" onClick={() => Navigate("Home")}>Home</a>
				<a href="#about" onClick={() => Navigate("About")}>About</a>
				<a href="#community-work" onClick={() => Navigate("CommunityWork")}>Community Work</a>
				<a href="#contact" onClick={() => Navigate("Contact")}>Contact</a>
				<a href="#cv" onClick={() => Navigate("CV")}>CV</a>
				<a href="#gallery" onClick={() => Navigate("Gallery")}>Gallery</a>
			</div>
		</nav>
	);
}

export default Nav;
