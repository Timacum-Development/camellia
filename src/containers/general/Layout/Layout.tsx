import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' exact component={Homepage} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default Layout;
