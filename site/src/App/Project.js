import React, { Component } from "react";
import Website from "./Website";
import Image from "./Image";
import Tool from "./Tool";
import Credit from "./Credit";
import "./Project.css";

export default class Project extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.project !== this.props.project;
	}

	render()
	{
		const tempProject = this.props.project;
		if ( tempProject == null )
		{
			return null;
		}

		const tempOnWebsite = ( tWebsite ) =>
		(
			<Website key={ tWebsite.url } url={ tWebsite.url } name={ tWebsite.name }/>
		);
		
		const tempOnImage = ( tImage ) =>
		(
			<Image key={ tImage.url } url={ tImage.url } thumbnail={ tImage.thumbnail }/>
		);
		
		const tempOnTool = ( tTool ) =>
		(
			<Tool key={ tTool } tool={ tTool }/>
		);
		
		const tempOnCredit = ( tCredit ) =>
		(
			<Credit key={ tCredit.name } name={ tCredit.name } role={ tCredit.role }/>
		);

		return (
			<article id="project">
				<div id="background" style={ { backgroundImage: "url(" + tempProject.tileImage + ")" } }>
					<div id="overlay"/>
				</div>
				<header>
					<h1>{ tempProject.name }</h1>
					<h2>{ tempProject.platform }</h2>
				</header>
				<nav>
				{
					tempProject.websites.map( tempOnWebsite )
				}
				</nav>
				<section>
				{
					tempProject.video != null &&
						<div className="video">
							<iframe src={ tempProject.video } frameBorder="0" allow="encrypted-media" allowFullScreen title="video" aria-hidden="true"></iframe>
						</div>
				}
				{
					tempProject.images != null &&
						<div id="images">
						{
							tempProject.images.map( tempOnImage )
						}
						</div>
				}
				</section>
				<section>
					<h3>Overview</h3>
					<p>{ tempProject.description }</p>
				</section>
				<section>
					<h3>Tools</h3>
					<ul>
					{
						tempProject.tools.map( tempOnTool )
					}
					</ul>
				</section>
				{
					tempProject.credits != null &&
					<section>
						<h3>Credits</h3>
						<ul>
						{
							tempProject.credits.map( tempOnCredit )
						}
						</ul>
					</section>
				}
			</article>
		);
	}
}