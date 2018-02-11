import React, { Component } from 'react';
import { Tooltip } from 'react-tippy';
import FontAwesome from 'react-fontawesome';
import ImgComponent from './ImgComponent';
import uniqID from 'uniq-id';

class PortfolioElement extends Component {
	renderLinks = () => {
		const { links } = this.props;
		return links.map(link => {
			const { href, modifier, icon, tooltip, iconColor } = link;
			const tooltipOptions = {
				position: 'bottom',
				trigger: 'mouseenter',
				theme: 'light',
				html: (
					<div
						style={{
							fontFamily: 'Titillium Web',
						}}
					>
						{tooltip}
					</div>
				),
			};
			return (
				<a
					key={uniqID()}
					href={href}
					className={`portfolio-element__link portfolio-element__link--${
						modifier ? modifier : 'regular'
					}`}
					style={{ color: iconColor ? iconColor : '#9079ff' }}
				>
					<Tooltip {...tooltipOptions}>
						<FontAwesome name={icon} />
					</Tooltip>
				</a>
			);
		});
	};
	render() {
		const { imagePath, scrollable, imageRatio } = this.props;
		return (
			<div className="portfolio-element">
				<div className="portfolio-element__image">
					<div className="portfolio__img-links">{this.renderLinks()}</div>
					<ImgComponent
						scrollable={scrollable}
						imageRatio={imageRatio}
						src={require(`../../images/portfolio/${imagePath}`)}
					/>
				</div>
			</div>
		);
	}
}

export default PortfolioElement;
