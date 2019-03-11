import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Project from "./Project";
import Style from "./App.module.css";

export default class App extends React.Component
{	
	render()
	{
		return (
			<div className={ Style.app }>
				<div className={ Style.content }>
					<Navigation/>
					<main className={ Style.main }>
						<Route path="/:project" children={
							( tProps ) =>
							{
								const tempKey = tProps.match == null ? null : tProps.match.params.project;
								const tempProject = tempKey == null || this.props.projects == null ? null : this.props.projects[ tempKey ];
								
								// Not found, return home
								if ( tempProject == null && tempKey != null )
								{
									return ( <Redirect to="/"/> );
								}

								// Render
								return (
									<React.Fragment>
										<Project project={ tempProject }/>
										<Projects projects={ this.props.projects } isOpen={ tempProject == null } isTouch={ this.props.isTouch } history={ tProps.history }/>
									</React.Fragment>
								);
							}
						}/>
					</main>
				</div>
			</div>
		);
	}
}