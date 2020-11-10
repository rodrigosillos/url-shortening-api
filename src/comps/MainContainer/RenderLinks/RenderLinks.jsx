import React, { useContext } from 'react';
import './RenderLinks.scss';

import { LocalContext } from '../LocalStorageContext.jsx';

export default function RenderLinks() {
	
	const contextType = useContext(LocalContext);
	let linksArray = JSON.parse(contextType.currentLocalData);

	if(linksArray)
		return (
			<section className="get-links">
				{ linksArray.reverse().map(renderItem) }
			</section>
		)
	else
		return null;

	function renderItem(props, index) {
		return (
			<div className={`item${index + 1}`} key={index}>

				<p className="original-link">{ props.originalLink }</p>

				<p className="shortened-link">{ props.shortenedLink }</p>

				<button type="button" className="cta-box" onClick={e=> copyToClipboard(e)}>
					Copy
				</button>
				
			</div>
		)
	}

	function copyToClipboard(e) {
		let targetLink = e.target.parentNode.children[1];

		const tempElement = document.createElement('textarea');
		tempElement.value = targetLink.innerText;

		document.body.appendChild(tempElement);

		tempElement.select();
		document.execCommand('copy');
		
		document.body.removeChild(tempElement);
	}
}

