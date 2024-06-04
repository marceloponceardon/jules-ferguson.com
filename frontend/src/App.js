import './App.css';

// Components
import {Nav, About, CommunityWork, Contact, CV, Gallery, Home} from './components';

function App() {
  return (
    <div className="App">
			<Nav />
			<Home />
			<About />
			<CommunityWork />
			<Contact />
			<CV />
			<Gallery />
    </div>
  );
}

export default App;
