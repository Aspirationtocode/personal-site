import React, { Component } from 'react';
import uniqID from 'uniq-id';
import Skill from './Skill';
import './index.css';

const skillsArray = [
	'CSS3|https://lenguajecss.com/img/css3-logo.png|400,453',
	'HTML5|https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png|600,600',
	'Javascript|https://cdn.rollbar.com/assets/shared/logos/javascript-icon.svg|1,1',
	'Git|https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png|1,1',
	'Jquery|https://user-images.githubusercontent.com/4436664/34706800-857497bc-f555-11e7-9cb3-8811455abf76.gif|1,1',
	'React|https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667|1,1',
	'Redux|https://cdn.worldvectorlogo.com/logos/redux.svg|2500,2383',
	'Redux middlewares|http://ohyayanotherblog.ghost.io/content/images/2016/09/orange-lambda.png|2000,2090',
	'BEM (CSS Methodology)|https://cdn-images-1.medium.com/max/638/1*bQLArQAfcohZ5E81z8gcHg.jpeg|638, 359',
	'Node.js|https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg|590,361',
	'ES6/7|https://cdn-images-1.medium.com/max/1600/1*ktJUMJO60oHoluiEV6KBmA.png|1,1',
	'Babel|https://raw.githubusercontent.com/babel/logo/master/babel.png|3276,1488',
	'Stylus|https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Stylus.svg/2000px-Stylus.svg.png|2000,1891',
	'Jest|https://codedaily.io/static/img/jest.svg|729,800',
	'Webpack|https://cdn.worldvectorlogo.com/logos/webpack-icon.svg|1,1',
	'Gulp|https://cdn.worldvectorlogo.com/logos/gulp.svg|1131,2500',
	'React Native|http://angular.github.io/react-native-renderer/assets/react.png|1,1',
];

class Skills extends Component {
	renderSkills = () => {
		return skillsArray.map(skill => {
			const [skillTitle, skillsImageURL, imageDimensions] = skill.split('|');
			return (
				<Skill
					title={skillTitle}
					imageDimensions={imageDimensions}
					imageURL={skillsImageURL}
					key={uniqID()}
				/>
			);
		});
	};
	render() {
		return (
			<div className="skills">
				<ul className="skills-list">{this.renderSkills()}</ul>
			</div>
		);
	}
}

export default Skills;
