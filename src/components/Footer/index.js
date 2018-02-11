import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer-content">
					<div className="footer-left footer-block">
						<div className="footer__header">Evgeniy Kulazhskiy</div>
						<a
							className="footer__email-address"
							href="mailto:aspiretocode@gmail.com"
						>
							aspiretocode@gmail.com
						</a>
						<div className="footer__descr">
							I’m a Russian software developer. I can help you build and grow
							your next product.
						</div>
					</div>
					<div className="footer-middle footer-block">
						<div className="footer__header">Contacts</div>
						<div>
							<a className="footer__link" href="mailto:aspiretocode@gmail.com">
								aspiretocode@gmail.com
							</a>
							<a className="footer__link">+7-962-910-32-12</a>
							<a className="footer__link" href="skype:live:jekan1602">
								Skype
							</a>
						</div>
					</div>
					<div className="footer-right">
						<div className="footer__header">Social</div>
						<div>
							<a
								className="footer__link"
								href="https://github.com/Aspirationtocode"
							>
								VK
							</a>
							<a className="footer__link" href="https://vk.com/aspiretocode">
								Github
							</a>
							<a
								className="footer__link"
								href="https://www.instagram.com/favouritebestmusic/"
							>
								Instagram
							</a>
						</div>
					</div>
				</div>
				<div className="footer__made-by-me">
					Handmade by me with <span className="animated-heart">❤</span> © 2018.
				</div>
			</footer>
		);
	}
}

export default Footer;
