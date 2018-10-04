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
			<div id="projects" className={ this.props.isOpen ? "open" : null }>
				<div id="controls">
				</div>
				<div id="container">
					{
						Object.keys( this.props.projects ).map(
							( tProjectKey ) =>
							{
								const tempProject = this.props.projects[ tProjectKey ];
								
								return (
									<div className="project-tile" key={ tempProject.name }>
										<div className="image" style={ { backgroundImage: "url(" + tempProject.tileImage + ")" } }/>
										<div id="tile-overlay"/>
										<div className="info">
											<div className="text">
												<h1>{ tempProject.name }</h1>
												<h2>{ tempProject.platform }</h2>
											</div>
											<Link className="more" to={ tProjectKey }>
												<h3>Read More</h3>
											</Link>
										</div>
									</div>
								);
							}
						)
					}
				</div>
			</div>
		);
	}
}