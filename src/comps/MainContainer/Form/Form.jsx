import React, { useContext } from 'react';
import './Form.scss';

import { LocalContext } from '../LocalStorageContext.jsx';

export default function Form() {

	const { currentLocalData, updateLocalData } = useContext(LocalContext);

	return (
		<form className="form" onSubmit={e=> handleSubmit(e)}>
			<div className="form-inner-wrapper">

				<div className="input-wrapper">
					<input name="input-link" className="input-link" placeholder="Enter a link here..." />
					<small className="error-message">Please add a link!</small>
				</div>
				
				<button className="submit cta-box" type="submit">Shorten It!</button>

			</div>
		</form>
	)

	function handleSubmit(e) {
		e.preventDefault();

		let inputLink = document.querySelector('.form .input-link');

		if (inputLink.value === '') {
			inputLink.parentNode.classList.add('error');
		}
		else {
			inputLink.parentNode.classList.remove('error');
			handleFetch(inputLink.value);
		}
	}

	function handleFetch(link) {

		fetch('https://api.shrtco.de/v2/shorten', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 'url': link })
		})

		.then(res => {
			if (!res.ok) {
				alert('Request Not Successful. Check the console for more information!');
				return Promise.reject(res);
			}
			return res.json();
		})

		.then(data => {
			let newLinkObject = {
				originalLink: link,
				shortenedLink: 'https://api.shrtco.de/v2/info' + data.hashid
			}

			let currentLinksArray = currentLocalData === null ?  [] : JSON.parse(currentLocalData);
			let newLinksArray;

			if (currentLinksArray.length < 3) {
			 	currentLinksArray.push(newLinkObject);
			 	updateLocalData(currentLinksArray);
			}
			else {
				newLinksArray = [currentLinksArray[1], currentLinksArray[2], newLinkObject];
				updateLocalData(newLinksArray);
			}
		})

		.catch(error => {

			if (typeof error.json === 'function') {
				error.json()
					.then(jsonError => {
						console.log('Json error');
						console.log(jsonError);
					})
					.catch(genericError => {
						console.log('Generic error');
						console.log(error.statusText);
					});
			}
			else {
				console.log('Fetch Error');
				console.log(error);
			}
		});

	}
}