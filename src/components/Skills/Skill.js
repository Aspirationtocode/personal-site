import React from 'react';

const getImageRenderDimensions = imageDimensions => {
	const [originalImageWidth, originalImageHeight] = imageDimensions.split(',');
	const coeff = originalImageHeight / originalImageWidth;
	let imageRenderWidth, imageRenderHeight;

	if (coeff < 1) {
		imageRenderWidth = 40;
		imageRenderHeight = imageRenderWidth * coeff;
	} else {
		imageRenderWidth = 40 / coeff;
		imageRenderHeight = imageRenderWidth * coeff;
	}
	return {
		imageRenderWidth,
		imageRenderHeight,
	};
};

const Skill = ({ title, imageURL, imageDimensions }) => {
	const { imageRenderWidth, imageRenderHeight } = getImageRenderDimensions(
		imageDimensions,
	);
	return (
		<div className="skills-list-item">
			<div className="skills-list-item__title">{title}</div>
			<div
				style={{
					backgroundImage: `url(${imageURL})`,
					width: imageRenderWidth,
					height: imageRenderHeight,
				}}
				className={`skills-list-item__icon skills-list-item__icon--${title}`}
			/>
		</div>
	);
};

export default Skill;
