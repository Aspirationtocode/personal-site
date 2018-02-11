import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo/';
import Section from './components/Section/';
import Skills from './components/Skills/';
import Portfolio from './components/Portfolio/';
import Footer from './components/Footer/';
import 'react-tippy/dist/tippy.css';

const subHeader = `
	I design in the browser with HTML(5), CSS(3) and a touch of JavaScript.
	I love coding things from scratch, but I can work with front-end frameworks.
	I design apps for Android & IOS platforms with React Native technology a little bit.
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<PersonalInfo />
				<Section
					header={{ text: 'Skills', color: '#fff' }}
					subheader={subHeader}
				>
					<Skills />
				</Section>
				<Section header={{ text: 'My personal projects', color: '#fff' }}>
					<Portfolio />
				</Section>
				<Footer />
			</div>
		);
	}
}

export default App;
