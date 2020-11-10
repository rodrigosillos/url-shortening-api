import React from 'react';
import IconCard1 from '../../../images/icon-brand-recognition.svg';
import IconCard2 from '../../../images/icon-detailed-records.svg';
import IconCard3 from '../../../images/icon-fully-customizable.svg';

export const CardsData = [
	{
		id: 1,
		icon: IconCard1,
		title: 'Brand Recognition',
		detail: 'Boost your brand recognition with each click. Generic links don’t mean a thing.Branded links help instil confidence in your content.'
	},
	{
		id: 2,
		icon: IconCard2,
		title: 'Detailed Records',
		detail: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
	},
	{
		id: 3,
		icon: IconCard3,
		title: 'Fully Customizable',
		detail: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
	}
]

export function Card(props) {
	return (
		<div className={`card${props.id}`} key={props.id}>

			<img src={props.icon} className={`card-icon`} alt="icon" />

			<h3 className="card-title">{props.title}</h3>

			<p className="card-detail">{props.detail}</p>

		</div>
	)
}