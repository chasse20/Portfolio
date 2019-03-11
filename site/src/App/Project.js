import React, { Component } from "react";
import Button from "./Button";
import Style from "./Project.module.css";
import ButtonStyle from "./Button.module.css";
import ButtonLinkStyle from "./ButtonLink.module.css";

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
		if ( this._activeProject == null )
		{
			return null;
		}

		return (
			<article className={ `${ Style.project }` + ( this.props.project == null ? "" : ` ${ Style.projectsOpen }` ) }>
				<div className={ Style.bg }>
					<div className={ Style.top }>
						<div className={ Style.mobile } style={ { backgroundImage: "url(" + this._activeProject.mobileImage + ")" } }/>
						<div className={ Style.wide } style={ { backgroundImage: "url(" + this._activeProject.wideImage + ")" } }/>
						<div className={ Style.full } style={ { backgroundImage: "url(" + this._activeProject.image + ")" } }/>
						<div className={ Style.topOverlay }/>
					</div>
					<div className={ Style.bottom }>
						<div className={ Style.bottomOverlay }/>
					</div>
				</div>
				<header className={ Style.header }>
					<h1 className={ Style.h1 }>{ this._activeProject.name }</h1>
					<h2 className={ Style.h2 }>{ this._activeProject.platform }</h2>
				</header>
				<div className={ Style.content }>
					<div className={ Style.media }>
						<section className={ Style.links }>
							{
								this._activeProject.links != null && this._activeProject.links.map(
									( tLink ) =>
									(
										<a className={ Style.a } key={ tLink.url } href={ tLink.url } target="_blank" rel="noopener noreferrer">
											<Button text={ tLink.name } icon={ tLink.icon } style={ ButtonLinkStyle }/>
										</a>
									)
								)
							}
						</section>
						<section className={ `${ Style.gallery }` + ( this._activeProject.images == null ? "" : ` ${ Style.multiple }` ) }>
							{
								/*this._activeProject.video != null &&
									<div className="video-wrapper">
										<div className="video">
											<iframe src={ this._activeProject.video } frameBorder="0" allow="encrypted-media" allowFullScreen title="video" aria-hidden="true"></iframe>
										</div>
									</div>*/
							}
							{
								this._activeProject.images != null &&
									this._activeProject.images.map(
										( tImage ) =>
										(
											<a className={ Style.image } key={ tImage.url } href={ tImage.url } target="_blank" rel="noopener noreferrer">
												<img src={ tImage.thumbnail } alt=""/>
											</a>
										)
									)
							}
						</section>
					</div>
					<div className={ Style.text }>
						<section className={ Style.textLinks }>
							{
								this._activeProject.links != null && this._activeProject.links.map(
									( tLink ) =>
									(
										<a className={ Style.a } key={ tLink.url } href={ tLink.url } target="_blank" rel="noopener noreferrer">
											<Button text={ tLink.name } icon={ tLink.icon } style={ ButtonLinkStyle }/>
										</a>
									)
								)
							}
						</section>
						<section>
							<Button text="Overview" icon="images/overview.svg" style={ ButtonStyle }/>
							<p>{ this._activeProject.description }</p>
						</section>
						{
							this._activeProject.tools != null &&
								<section>
									<Button text="Tools" icon="images/tools.svg" style={ ButtonStyle }/>
									<ul>
										{
											this._activeProject.tools.map(
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
							this._activeProject.responsibilities != null &&
								<section className={ Style.responsibilities }>
									<Button text="Responsibilities" icon="images/responsibilities.svg" style={ ButtonStyle }/>
									<ul>
										{
											this._activeProject.responsibilities.map(
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