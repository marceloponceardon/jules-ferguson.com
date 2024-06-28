import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import { Contact, CV, Gallery, Home, Thanks, NoPage } from './pages';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'production') {
	console.log = () => {}
	console.error = () => {}
	console.debug = () => {}
} else {
	console.log('Development mode')
	console.log('.env:', process.env)
}

// When the app is loaded, the browser makes a request to the API to "wake it up" since it's hosted on Render's free tier.
// This is to prevent the API from going to sleep after 30 minutes of inactivity.

async function wakeUpAPI() {
	fetch(process.env.REACT_APP_BACKEND_URL).then(response => {
		if (response.ok) {
			console.log('API is awake')
		} else {
			console.error('API is not awake')
		}
	})
};

export default function App() {
	wakeUpAPI();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="selected-works" element={<Gallery />} />
					<Route path="cv" element={<CV />} />
					<Route path="contact" element={<Contact />} />
					<Route path="contact/thank-you" element={<Thanks />} />
					<Route path="*" element={<NoPage />} /> {/* 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); 
