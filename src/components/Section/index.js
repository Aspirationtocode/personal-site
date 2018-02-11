import React, { Component } from 'react';
import Header from '../Header/';
import './index.css';

class Section extends Component {
	render() {
		const { children, header, subheader } = this.props;
		return (
			<section className="section">
				<div className="section__content">
					<Header
						text={header.text}
						color={header.color}
						subheader={subheader}
					/>
					{children}
				</div>
			</section>
		);
	}
}

export default Section;
