import React from 'react';
import './index.css';

const Header = ({ text, color, subheader }) => (
	<div>
		<h2 className="header" style={{ color }}>
			{text}
		</h2>
		{subheader && <h3 className="subheader">{subheader}</h3>}
	</div>
);

export default Header;
