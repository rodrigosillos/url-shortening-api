import React from 'react';
import './TopSection.scss';

import ImgWorking from '../../../images/illustration-working.svg';

export default function TopSection() {
	return (
		<section className="top-section">
			<img className="img-working" src={ImgWorking} alt="img-working" />

			<div className="text-container">

				<h1 className="section-title">More than just shorter links</h1>
				<p className="section-subtitle">Build your brand’s recognition and get detailed insights
					 on how your links are performing.</p>
				<a className="cta-box" href="./">Get Started</a>

			</div>

		</section>
	)
}