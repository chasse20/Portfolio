import React, { Component } from "react";
import Button from "./Button";
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

		const tempBackgroundStyle =
		{
			backgroundImage: "url(" + tempProject.tileImage + ")"
		};

		if ( tempProject.backgroundPosition != null )
		{
			tempBackgroundStyle.backgroundPosition = tempProject.backgroundPosition;
		}

		return (
			<article>
				<div id="bottom-bg">
					<div className="overlay"/>
				</div>
				<div id="top-bg" style={ tempBackgroundStyle }>
					<div className="overlay"/>
				</div>
				<header>
					<h1>{ tempProject.name }</h1>
					<h2>{ tempProject.platform }</h2>
				</header>
				<div id="content">
					<div id="content-left">
						<section>
							{
								tempProject.links.map(
									( tLink ) =>
									(
										<a className="link" key={ tLink.url } href={ tLink.url } target="_blank" rel="noopener noreferrer">
											<Button text={ tLink.name } icon={ tLink.icon }/>
										</a>
									)
								)
							}
						</section>
						<section id="media">
							{
								tempProject.video != null &&
									<div id="video-wrapper">
										<div id="video">
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
					<div id="content-right">
						<section>
							<Button text="Overview" icon="images/overview.svg"/>
							<p>{ tempProject.description }</p>
						</section>
						<section>
							<Button text="Tools" icon="images/tools.svg"/>
							<ul>
								{
									tempProject.tools.map(
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
											tempProject.credits.map(
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