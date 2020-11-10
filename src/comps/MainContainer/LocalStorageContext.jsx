import React, { Component, createContext } from 'react';

export const LocalContext = createContext('');

class LocalContextProvider extends Component {
	
	constructor() {
		super();
		try {
			this.state = {
				currentLocalData: window.localStorage.getItem('Links')
			};
		}
		catch (error) {
			this.state = {
				currentLocalData: null
			};
			console.log('Can\'t access localStorage!');
			console.log(error);
		}
	}

	render() {
		return (
			<LocalContext.Provider value={{ ...this.state,  updateLocalData: this.updateLocalData.bind(this) }}>
				{ this.props.children }
			</LocalContext.Provider>
		);
	}

	updateLocalData(newLinksArray) {
		try {
			window.localStorage.setItem('Links', JSON.stringify(newLinksArray));
		}
		catch (error) {
			console.log('An error occurred while trying to store data in localStorage.');
			console.log(error);
		}

		this.setState({ currentLocalData: JSON.stringify(newLinksArray) });
	}
}

export default LocalContextProvider;
