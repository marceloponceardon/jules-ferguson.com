import { Header, Footer, Nav } from './components';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Layout() {
	const location = useLocation();
  return (
		<>
    <div className="App">
			<Header />
			<Nav />
			<TransitionGroup>
				<CSSTransition>
					<Outlet />
				</CSSTransition>
			</TransitionGroup>
			<Footer />
    </div>
		</>
  );
}

export default Layout;
