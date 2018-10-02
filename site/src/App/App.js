import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";
import RouteProject from "./RouteProject";
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
						(
							<RouteProject projects={ this.props.projects } projectKey={ tProps.match == null ? null : tProps.match.params.project }/>
						)
					}/>
				</main>
			</React.Fragment>
		);
	}
}