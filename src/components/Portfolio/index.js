import React, { Component } from 'react';
import uniqID from 'uniq-id';
import Slider from 'react-slick';
import './index.css';
import './img-component.css';
import PortfolioElement from './PortfolioElement';
import { portfolioInfo } from './helpers';

class Portfolio extends Component {
	render() {
		const settings = {
			arrows: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerPadding: '10px',
			centerMode: true,
			autoplay: false,
			variableWidth: true,
		};

		return (
			<div className="portfolio">
				<div className="portfolio__slider">
					<Slider {...settings} ref={slider => (this.slider = slider)}>
						{portfolioInfo.map((portfolioItem, index) => {
							return (
								<div key={uniqID()}>
									<PortfolioElement {...portfolioItem} />
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		);
	}
}

export default Portfolio;
