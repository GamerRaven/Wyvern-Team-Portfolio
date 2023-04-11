import React from 'react';
import './Minecraft.scss'

import { MinecraftData } from '../../data';

function Minecraft(props) {
	const Elements = MinecraftData.map((item) => {
		return (
			<div className="minecraft__item">
				<img src={item.img} alt="" className="minecraft__item__image" />
				<h2 className="minecraft__item__heading">{item.heading}</h2>
				<img src={item.img} alt="" className="minecraft__item__mini" />
			</div>
		);
	});

	return <div className="minecraft">{Elements}</div>;
}
import './Minecraft.scss'

export default Minecraft;