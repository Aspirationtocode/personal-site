import React, { Component } from 'react';
import viewport from 'browser-viewport';

class ImgComponent extends Component {
	state = {
		vw: null,
	};
	updateVW = () => {
		let currentWidth = viewport.width();
		this.setState({
			vw: currentWidth,
		});
	};
	componentDidMount() {
		this.updateVW();
		window.addEventListener('resize', this.updateVW);
	}
	render() {
		const { src, imageRatio } = this.props;
		const { state } = this;
		let currentHeight = state.vw * 0.33;
		if (currentHeight > 300) {
			currentHeight = 300;
		}
		if (currentHeight < 160) {
			currentHeight = 160;
		}
		const currentWidth = currentHeight * imageRatio;
		return (
			<div
				className="img"
				style={{
					width: currentWidth,
					height: currentHeight,
				}}
			>
				<div
					className="img__content"
					style={{
						backgroundImage: `url(${src})`,
					}}
				/>
			</div>
		);
	}
}

export default ImgComponent;
