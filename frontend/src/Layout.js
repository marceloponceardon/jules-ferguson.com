import { Header, Footer, Nav } from './components';
import { Outlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Layout() {
  return (
		<>
    <div className="App">
			<span>
				<div className="Flex-gap"></div>
				<Header />
				<Nav />
				<div className="Flex-gap"></div>
			</span>
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
