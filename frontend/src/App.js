import './App.css';

// Components
import { Header, Footer, Nav } from './components';

function Layout() {
  return (
    <div className="App">
			<Header />	
			<Nav />
			<Footer />
    </div>
  );
}

// By default, hide other "page" components except for the Home page

export default Layout;
