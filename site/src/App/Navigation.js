import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component
{
	constructor( tProps )
	{
		super( tProps );

		this.state =
		{
			isOpen: false
		}
	}
	
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextState.isOpen !== this.state.isOpen;
	}

	onMenuToggle()
	{
		this.setState( { isOpen: !this.state.isOpen } );
	}

	render()
	{
		return (
			<nav>
				<header>
					<Link to="/" id="logo">
						<img src="images/logo.svg"/>
						<h1>Chris Hassebrook</h1>
					</Link>
					<button id="menu-toggle" className={ this.state.isOpen ? "open" : null } onClick={ () => { this.onMenuToggle(); } }>
						<img src="images/menuClosed.svg" id="menu-toggle-closed"/>
						<img src="images/menuOpened.svg" id="menu-toggle-opened"/>
					</button>
				</header>
				<div id="links" className={ this.state.isOpen ? "open" : null }>
					<a href="Resume.pdf" target="_blank">
						<img src="images/resume.svg"/>
						<h2>Resume</h2>
					</a>
					<a href="Github" target="_blank">
						<img src="images/github.svg"/>
						<h2>Github</h2>
					</a>
					<a href="Email" target="_blank">
						<img src="images/email.svg"/>
						<h2>Email</h2>
					</a>
				</div>
			</nav>
		);
	}
}