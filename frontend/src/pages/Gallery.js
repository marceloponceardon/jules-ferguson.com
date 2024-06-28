// Gallery page component
// TODO: Implement with Google Photos API to fetch images from a Google Photos album
function getImagePaths(directory) {
	// Get all image paths from the images folder
	let images = [];
	directory.keys().map((item, index) => images.push(item.replace("./", "")));
	return images;
};

function Gallery() {
	// This component is actually called "Selected Works" in the design
	
	const directory = require.context("../../public/gallery", false, /\.(png|jpe?g|svg)$/);
	let imagePaths = getImagePaths(directory);

	let images = [];
	imagePaths.map((path)	=> images.push(require("../../public/gallery/" + path)));

	return (
		<div className="Page" id="gallery">
			<h2>Gallery</h2>
			<div className="ImageFlex">
				{images.map((image, index) => {
					return (
						<div key={index} className="ImageContainer">
							<img key={index} src={image} alt={image} id={index} className="Image" />
						</div>
					);
				})}
			</div>
			{/* Back to top button */}
			<button className="BackToTop" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
				Back to top
			</button>
		</div>
	);
}

export default Gallery;
