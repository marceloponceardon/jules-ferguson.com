import '../App.css';

// Navigation bar component

// Hide the other components except for the one clicked on 
function Navigate(pageName) {
	console.log('navigated to: ' + pageName);
	const components = document.getElementsByClassName("App-component");
	for (let i = 0; i < components.length; i++) {
		components[i].style.display = "none";
	}
	document.getElementById(pageName).style.display = "block";
}

function Nav() {
	return (
		<nav className="App-navigation">
			<h3>Jules Ferguson</h3>
			<span className="Nav-links">
				<a href="#home" onClick={() => Navigate("Home")}>Home</a>
				<a href="#about" onClick={() => Navigate("About")}>About</a>
				<a href="#community-work" onClick={() => Navigate("CommunityWork")}>Community Work</a>
				<a href="#contact" onClick={() => Navigate("Contact")}>Contact</a>
				<a href="#cv" onClick={() => Navigate("CV")}>CV</a>
				<a href="#gallery" onClick={() => Navigate("Gallery")}>Gallery</a>
			</span>
		</nav>
	);
}

// By default start on the home page
const components = document.getElementsByClassName("App-component");
for (let i = 0; i < components.length; i++) {
	components[i].style.display = "none";
}
document.getElementById("Home").style.display = "block";

export default Nav;
