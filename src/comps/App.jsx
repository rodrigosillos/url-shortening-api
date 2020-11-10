import React from 'react';
import './App.scss';

import Header from './Header/Header.jsx';
import MainContainer from './MainContainer/MainContainer.jsx';
import Footer from './Footer/Footer.jsx';

export default function App() {
	return (
		<>
			<Header/>
			<MainContainer/>
			<Footer/>	
		</>
	)
}