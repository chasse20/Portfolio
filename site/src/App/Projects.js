import React, { Component } from "react";
import ProjectTile from "./ProjectTile";
import "./Projects.css";

export default class Projects extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.projects !== this.props.projects || tNextProps.isOpen !== this.props.isOpen;
	}

	render()
	{
		const tempOnProject = ( tProjectKey ) =>
		(
			<ProjectTile key={ tProjectKey } project={ this.props.projects == null ? null : this.props.projects[ tProjectKey ] } projectKey={ tProjectKey }/>
		);

		return (
			<nav id="projects" className={ this.props.isOpen ? "open" : null }>
			{
				Object.keys( this.props.projects ).map( tempOnProject )
			}
			</nav>
		);
	}
}