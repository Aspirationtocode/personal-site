import React, { Component } from 'react';
import viewport from 'browser-viewport';
import Typed from 'react-typed';
import FontAwesome from 'react-fontawesome';
import './index.css';
import { typedTextArray } from './helpers';

class PersonalInfo extends Component {
	state = {
		showContacts: false,
		linkClasses: ['contacts__link'],
	};

	handleContactsMouseEnter = e => {
		this.setState({
			showContacts: true,
		});
		setTimeout(() => {
			this.setState(prevState => {
				return {
					linkClasses: [...prevState.linkClasses, 'contacts__link--pea'],
				};
			});
		}, 100);
	};

	handleContactsMouseLeave = e => {
		this.setState(prevState => {
			const linkClassesWithoutPEA = prevState.linkClasses.filter(
				className => className !== 'contacts__link--pea',
			);
			return {
				showContacts: false,
				linkClasses: linkClassesWithoutPEA,
			};
		});
	};

	componentDidMount = () => {
		this.contacts.addEventListener('mouseenter', this.handleContactsMouseEnter);
		this.contacts.addEventListener('mouseleave', this.handleContactsMouseLeave);
		this.go.addEventListener('click', () => {
			viewport.scrollTop(viewport.height(), 1000);
		});
	};
	render() {
		const { state } = this;
		const contactsClasses = ['contacts'];
		const photoClasses = ['personal-info__photo'];
		if (state.showContacts) {
			contactsClasses.push('contacts--visible');
			photoClasses.push('personal-info__photo--with-contacts');
		}
		return (
			<header className="personal-info">
				<div className="personal-info__content">
					<h1 className="personal-info__text">
						<div>{typedTextArray[0]}</div>
						<Typed
							cursorChar="_"
							strings={typedTextArray.slice(1)}
							typeSpeed={60}
							loop
						/>
					</h1>

					<div
						className={photoClasses.join(' ')}
						ref={photo => (this.photo = photo)}
					/>
					<div
						className={contactsClasses.join(' ')}
						ref={contacts => (this.contacts = contacts)}
					>
						<a
							className={[...state.linkClasses, 'contacts__link--github'].join(
								' ',
							)}
							href="https://github.com/Aspirationtocode"
						/>
						<a
							className={[...state.linkClasses, 'contacts__link--vk'].join(' ')}
							href="https://vk.com/aspiretocode"
						/>
						<a
							className={[...state.linkClasses, 'contacts__link--skype'].join(
								' ',
							)}
							href="skype:live:jekan1602"
						/>
					</div>
					<div className="personal-info__go" ref={c => (this.go = c)}>
						<div>Learn more about what I do</div>
						<FontAwesome name="chevron-down" />
					</div>
				</div>
			</header>
		);
	}
}

export default PersonalInfo;
