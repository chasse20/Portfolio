import React, { Component } from "react";
import Button from "./Button";
import "./Project.css";

export default class Project extends Component
{
	constructor( tProps )
	{
		super( tProps );
		
		this._activeProject = tProps.project;
	}
	
	shouldComponentUpdate( tNextProps, tNextState )
	{
		if ( tNextProps.project != null )
		{
			this._activeProject = tNextProps.project;
		}
		
		return tNextProps.project !== this.props.project;
	}

	render()
	{
		var tempProject = this._activeProject;
		if ( tempProject == null )
		{
			tempProject = {};
		}

		return (
			<article className={ this.props.project == null ? null : "open" }>
				<div className="bottom-bg">
					<div className="overlay"/>
				</div>
				<div className="top-bg">
					<div className="mobile-bg" style={ { backgroundImage: "url(" + tempProject.mobileImage + ")" } }/>
					<div className="wide-bg" style={ { backgroundImage: "url(" + tempProject.wideImage + ")" } }/>
					<div className="full-bg" style={ { backgroundImage: "url(" + tempProject.image + ")" } }/>
					<div className="overlay"/>
				</div>
				<header>
					<h1>{ tempProject.name }</h1>
					<h2>{ tempProject.platform }</h2>
				</header>
				<div className="content">
					<div className="content-left">
						<section>
							{
								tempProject.links != null && tempProject.links.map(
									( tLink ) =>
									(
										<a className="link" key={ tLink.url } href={ tLink.url } target="_blank" rel="noopener noreferrer">
											<Button text={ tLink.name } icon={ tLink.icon }/>
										</a>
									)
								)
							}
						</section>
						<section className={ "media" + ( tempProject.images == null ? "" : " multiple" ) }>
							{
								tempProject.video != null &&
									<div className="video-wrapper">
										<div className="video">
											<iframe src={ tempProject.video } frameBorder="0" allow="encrypted-media" allowFullScreen title="video" aria-hidden="true"></iframe>
										</div>
									</div>
							}
							{
								tempProject.images != null &&
									tempProject.images.map(
										( tImage ) =>
										(
											<a className="image" key={ tImage.url } href={ tImage.url } target="_blank" rel="noopener noreferrer">
												<img src={ tImage.thumbnail } alt=""/>
											</a>
										)
									)
							}
						</section>
					</div>
					<div className="content-right">
						<section>
							<Button text="Overview" icon="images/overview.svg"/>
							<p>{ tempProject.description }</p>
						</section>
						<section>
							<Button text="Tools" icon="images/tools.svg"/>
							<ul>
								{
									tempProject.tools != null && tempProject.tools.map(
										( tTool ) =>
										(
											<li className="tool" key={ tTool }>
												{ tTool }
											</li>
										)
									)
								}
							</ul>
						</section>
						{
							tempProject.credits != null &&
								<section>
									<Button text="Credits" icon="images/credits.svg"/>
									<ul>
										{
											tempProject.credits != null && tempProject.credits.map(
												( tCredit ) =>
												(
													<li className="credit" key={ tCredit.name }>
														<b>{ tCredit.name }:</b>
														<span>{ tCredit.role }</span>
													</li>
												)
											)
										}
									</ul>
								</section>
						}
					</div>
				</div>
			</article>
		);
	}
}