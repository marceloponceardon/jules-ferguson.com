import './App.css';

// Components
import {Header, Footer, Nav, About, CommunityWork, Contact, CV, Gallery, Home} from './components';

function App() {
  return (
    <div className="App">
			<Header />	
			<Nav />
			<Home />
			<About />
			<CommunityWork />
			<Contact />
			<CV />
			<Gallery />
			<Footer />
    </div>
  );
}

export default App;
