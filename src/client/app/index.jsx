import React from 'react';
import {render} from 'react-dom';
import 'bootstrap';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Carousel from './components/subComponents/carousel.jsx';
import HomeServices from './components/subComponents/homeServices.jsx';
import Introduction from './components/home/introduction.jsx';
import style from './styles/main.scss';


class App extends React.Component {
	render () {
		return <div className="container-fluid">
			<Header />
			<div>
				<Carousel />
				<HomeServices />
				<Introduction />
				<div id ="responsive-reviews-module"></div>
				<Footer />
			</div>
		</div>;
	}
}

render(<App/>, document.getElementById('app'));