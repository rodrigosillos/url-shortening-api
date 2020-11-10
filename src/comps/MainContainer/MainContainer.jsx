import React, {useState} from 'react';
import './MainContainer.scss';

import TopSection from './TopSection/TopSection.jsx';
import Form from './Form/Form.jsx';
import RenderLinks from './RenderLinks/RenderLinks.jsx';
import StatsSection from './StatsSection/StatsSection.jsx';
import LocalContextProvider from './LocalStorageContext.jsx';


export default function MainContainer() {

	return (
		<main className="main-container">

			<TopSection/>

			<LocalContextProvider>
				<Form/>
				<RenderLinks/>
			</LocalContextProvider>

			<StatsSection/>

			<section className="boost-section">
				<h2 className="section-title">Boost your links today</h2>
				<a className="cta-box" href="./">Get Started</a>
			</section>
			
		</main>
	)
}