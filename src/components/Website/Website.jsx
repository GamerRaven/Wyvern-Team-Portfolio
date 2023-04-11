import React from 'react';
import './Website.scss'


import { WebsiteData } from '../../data';

function Website(props) {
	const Elements = WebsiteData.map((item) => {
		return (
			<div className="website__item">
				<img src={item.img} alt="" className="website__item__image" />
				<h2 className="website__item__heading">{item.heading}</h2>
				<img src={item.img} alt="" className="website__item__mini" />
			</div>
		);
	});

	return <div className="website">{Elements}</div>;
}
import './Website.scss'
export default Website;