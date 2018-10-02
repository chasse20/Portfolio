import React, { Component } from "react";
import "./Credit.css";

export default class Credit extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.name !== this.props.name || tNextProps.role !== this.props.role;
	}

	render()
	{
		return (
			<li className="credit" key={ this.props.name }>
				<b>{ this.props.name }:</b>
				<span>{ this.props.role }</span>
			</li>
		);
	}
}