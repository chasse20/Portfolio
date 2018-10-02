import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Projects from "./Projects";
import Project from "./Project";

export default class RouteProject extends Component
{
	render()
	{
		const tempProject = this.props.projectKey == null || this.props.projects == null ? null : this.props.projects[ this.props.projectKey ];
		if ( tempProject == null && this.props.projectKey != null )
		{
			return ( <Redirect to="/"/> );
		}

		return (
			<React.Fragment>
				<Projects projects={ this.props.projects } isOpen={ tempProject == null }/>
				<Project project={ tempProject }/>
			</React.Fragment>
		);
	}
}