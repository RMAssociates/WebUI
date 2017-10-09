import React from 'react';
import {render} from 'react-dom';
import 'bootstrap';
import Header from './components/header.jsx';
import Carousel from './components/subComponents/carousel.jsx';
import style from './styles/main.scss';


class App extends React.Component {
	render () {
		return <div className="container-fluid">
			<Header />
			<div>
				<Carousel />
			</div>
		</div>;
	}
}

render(<App/>, document.getElementById('app'));