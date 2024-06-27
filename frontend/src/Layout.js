import { Header, Footer, Nav } from './components';
import { Outlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
		<ToastContainer 
			newestOnTop
			position="bottom-center"
			closeButton
		/>
		</>
  );
}

export default Layout;
