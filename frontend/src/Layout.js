import { Header, Footer, Nav } from './pages';
import { Outlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Layout() {
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
