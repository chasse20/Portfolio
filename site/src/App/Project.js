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
		return null;
		
		var tempProject = this._activeProject;
		if ( tempProject == null )
		{
			tempProject = {};
		}

		return (
			<article className={ this.props.project == null ? null : "open" }>
				<div className="bg">
					<div className="top">
						<div className="mobile" style={ { backgroundImage: "url(" + tempProject.mobileImage + ")" } }/>
						<div className="wide" style={ { backgroundImage: "url(" + tempProject.wideImage + ")" } }/>
						<div className="full" style={ { backgroundImage: "url(" + tempProject.image + ")" } }/>
						<div className="overlay"/>
					</div>
					<div className="bottom">
						<div className="overlay"/>
					</div>
				</div>
				<header>
					<h1>{ tempProject.name }</h1>
					<h2>{ tempProject.platform }</h2>
				</header>
				<div className="content">
					<div className="media">
						<section className="links">
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
						<section className={ "gallery" + ( tempProject.images == null ? "" : " multiple" ) }>
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
					<div className="text">
						<section className="links">
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
						<section>
							<Button text="Overview" icon="images/overview.svg"/>
							<p>{ tempProject.description }</p>
						</section>
						{
							tempProject.tools != null &&
								<section>
									<Button text="Tools" icon="images/tools.svg"/>
									<ul>
										{
											tempProject.tools.map(
												( tTool ) =>
												(
													<li key={ tTool }>
														{ tTool }
													</li>
												)
											)
										}
									</ul>
								</section>
						}
						{
							tempProject.responsibilities != null &&
								<section className="responsibilities">
									<Button text="Responsibilities" icon="images/responsibilities.svg"/>
									<ul>
										{
											tempProject.responsibilities.map(
												( tResponsibility ) =>
												(
													<li key={ tResponsibility }>
														{ tResponsibility }
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