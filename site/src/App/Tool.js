import React, { Component } from "react";
import "./Tool.css";

export default class Tool extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.tool !== this.props.tool;
	}

	render()
	{
		return (
			<li className="tool">
				{ this.props.tool }
			</li>
		);
	}
}