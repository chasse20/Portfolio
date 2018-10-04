import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Project from "./Project";
import "./App.css";

export default class App extends Component
{
	render()
	{
		return (
			<React.Fragment>
				<Navigation/>
				<main>
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
									<Projects projects={ this.props.projects } isOpen={ tempProject == null }/>
									<Project project={ tempProject }/>
								</React.Fragment>
							);
						}
					}/>
				</main>
			</React.Fragment>
		);
	}
}