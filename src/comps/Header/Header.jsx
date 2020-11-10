import React, {useState} from 'react';
import './Header.scss';

import {ReactComponent as BrandLogo} from '../../images/logo.svg';
import {ReactComponent as IconHamburger} from '../../images/icon-hamburger.svg';
import {ReactComponent as IconClose} from '../../images/icon-close.svg';

export default function Header() {
	const [navbarState, setNavbarState] = useState('expanded');

	const handleClick = _=> {
		document.querySelector('.header .navbar').classList.toggle('show');
		
		let menuIcons = document.querySelectorAll('.header .icon-hamburger, .header .icon-close');
		
		setNavbarState(prev=> prev==='collapsed' ? 'expanded' : 'collapsed');
		
		if(navbarState==='expanded') {
			menuIcons[0].style.display = 'none';
			menuIcons[1].style.display = 'initial';
		} else {
			menuIcons[0].style.display = 'initial';
			menuIcons[1].style.display = 'none';
		}
	}

	return (
		<header className="header">

			<BrandLogo className="brand" />

			<nav className={`navbar`}>
				<div className="nav-menu-1">
					<a className="navlink" href="./">Features</a>
					<a className="navlink" href="./">Pricing</a>
					<a className="navlink" href="./">Resources</a>
				</div>
				
				<div className="nav-menu-2">
					<a className="navlink" href="./">Login</a>
					<a className="navlink cta-box" href="./">Sign Up</a>
				</div>
			</nav>

			<IconHamburger className="icon-hamburger" onClick={handleClick}	/>
			<IconClose className="icon-close" onClick={handleClick} />

		</header>
	)
}