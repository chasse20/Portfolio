import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProjectTile.css";

export default class ProjectTile extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.project !== this.props.project;
	}

	render()
	{
		if ( this.props.project == null )
		{
			return null;
		}

		return (
			<Link className="project-tile" key={ this.props.project.name } to={ this.props.projectKey }>
				<div className="background">
					<div className="background-image" style={ { backgroundImage: "url(" + this.props.project.tileImage + ")" } }/>
					<div className="overlay"/>
				</div>
				<header>
					<h1>{ this.props.project.name }</h1>
					<h2>{ this.props.project.platform }</h2>
				</header>
			</Link>
		);
	}
}