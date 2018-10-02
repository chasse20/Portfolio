import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default class Projects extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.projects !== this.props.projects || tNextProps.isOpen !== this.props.isOpen;
	}

	render()
	{
		return (
			<nav id="projects" className={ this.props.isOpen ? "open" : null }>
			{
				Object.keys( this.props.projects ).map(
					( tProjectKey ) =>
					{
						const tempProject = this.props.projects[ tProjectKey ];
						
						return (
							<Link className="project-tile" key={ tempProject.name } to={ tProjectKey }>
								<div className="background">
									<div className="background-image" style={ { backgroundImage: "url(" + tempProject.tileImage + ")" } }/>
									<div className="overlay"/>
								</div>
								<header>
									<h1>{ tempProject.name }</h1>
									<h2>{ tempProject.platform }</h2>
								</header>
							</Link>
						);
					}
				)
			}
			</nav>
		);
	}
}