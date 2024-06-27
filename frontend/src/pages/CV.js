// CV component
import { toast } from 'react-toastify';
function CV() {

	const cvURL = process.env.REACT_APP_BACKEND_URL + "/cv";
	
	const handleDownload = async (response) => {
		const downloadToast = toast.loading('Downloading CV...');	
		// Make API call to download CV
		try {
			if (process.env.NODE_ENV === 'development') {
				console.log('URI:', cvURL + '/download');
			}

			const response = await fetch(cvURL + '/download', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/pdf',
				},
			});

			if (response.ok) {
				const blob = await response.blob();
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = 'CV.pdf';
				a.click();
				toast.update(downloadToast, {
					render: 'CV downloaded successfully',
					isLoading: false,
					closeButton: true
				});
			} else {
				toast.update(downloadToast, {
					render: 'Failed to download CV! (' + response.status + ')',
					type: 'error',
					isLoading: false,
					closeButton: true
				});
			}
		} catch (error) {
			console.error('Fetch error:', error);
			toast.update(downloadToast, {
				render: 'Failed to download CV',
				type: 'error',
				isLoading: false,
				closeButton: true
			});
		}
	};

	return (
		<div className="Page" id="cv">
			<h2>CV</h2>
			<button onClick={handleDownload}>
				Download as PDF
			</button>
		</div>
	);
}

export default CV;
