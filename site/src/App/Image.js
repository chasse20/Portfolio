import React, { Component } from "react";
import "./Image.css";

export default class Image extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.url !== this.props.url || tNextProps.thumbnail !== this.props.thumbnail;
	}

	render()
	{
		return (
			<a className="image" href={ this.props.url } target="_blank">
				<img src={ this.props.thumbnail } alt=""/>
			</a>
		);
	}
}