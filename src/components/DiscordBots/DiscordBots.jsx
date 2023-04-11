import React from 'react';
import './DiscordBots.scss'

import { DiscordBotsData } from '../../data';

function DiscordBots(props) {
	const Elements = DiscordBotsData.map((item) => {
		return (
			<div className="discord__item">
				<img src={item.img} alt="" className="discord__item__image" />
				<h2 className="discord__item__heading">{item.heading}</h2>
				<img src={item.img} alt="" className="discord__item__mini" />
			</div>
		);
	});

	return <div className="discord">{Elements}</div>;
}
export default DiscordBots;