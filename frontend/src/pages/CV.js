// CV component
import { toast } from 'react-toastify';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).toString();

function CV() {

	// URL for API calls related to CV
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
				a.download = 'jules-ferguson-cv.pdf';
				a.click();
				toast.update(downloadToast, {
					type: 'success',
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

	// PDF viewer
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div className="Page" id="cv">
			<span className="Content">
				<h2>CV</h2>
				<div className="CV-Container">
					<Document 
						file={cvURL + '/view'}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} />
					</Document>
				</div>
				<p>Page {pageNumber} of {numPages}</p>
				<button onClick={handleDownload}>
					Download as PDF
				</button>
			</span>
		</div>
	);
}

export default CV;
