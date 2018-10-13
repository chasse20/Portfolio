import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.text !== this.props.text || tNextProps.icon !== this.props.icon;
	}

	render()
	{
		return (
			<div className="button">
				<h3>{ this.props.text }</h3>
				<div className="bar">
					<div className="icon">
						<img src={ this.props.icon } alt=""/>
					</div>
					<div className="right"/>
				</div>
			</div>
		);
	}
}