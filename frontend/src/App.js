import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
