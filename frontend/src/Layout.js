import { Header, Footer, Nav } from './components';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
		<>
    <div className="App">
			<Header />
			<Nav />
			<Outlet />
			<Footer />
    </div>
		</>
  );
}

export default Layout;
