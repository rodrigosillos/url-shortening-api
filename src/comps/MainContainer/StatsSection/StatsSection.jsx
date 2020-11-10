import React from 'react';
import './StatsSection.scss';
import {CardsData, Card} from './Cards.jsx';

export default function StatsSection() {
	return (
		<section className="stats-section">

			<div className="main-text">
				<h2 className="section-title">Advanced Statistics</h2>
				<p className="section-subtitle">
					Track how your links are performing across the web with our 
					advanced statistics dashboard.
				</p>
			</div>

			<div className="cards">
				{CardsData.map(Card)}							
			</div>
			
		</section>
	)
}