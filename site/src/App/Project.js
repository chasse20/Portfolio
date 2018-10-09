import React, { Component } from "react";
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

		return (
			<article>
				<div id="background" style={ { backgroundImage: "url(" + tempProject.tileImage + ")" } }>
					<div id="overlay"/>
				</div>
				<div id="content">
					<header>
						<h1>{ tempProject.name }</h1>
						<h2>{ tempProject.platform }</h2>
					</header>
					<section>
					{
						tempProject.websites.map(
							( tWebsite ) =>
							(
								<a className="website" key={ tWebsite.url } href={ tWebsite.url } target="_blank">
									<span>{ tWebsite.name }</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792">
										<g transform="matrix(1,0,0,-1,75.932203,1391.7288)">
											<path d="M 1408,547 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 255 v 0 q 13,0 22.5,-9.5 9.5,-9.5 9.5,-22.5 0,-27 -26,-32 -77,-26 -133,-60 -10,-4 -16,-4 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 214 q 0,19 18,29 28,13 54,37 16,16 35,8 21,-9 21,-29 z m 237,496 -384,-384 q -18,-19 -45,-19 -12,0 -25,5 -39,17 -39,59 V 896 H 992 Q 669,896 554,765 435,628 480,292 q 3,-23 -20,-34 -8,-2 -12,-2 -16,0 -26,13 -10,14 -21,31 -11,17 -39.5,68.5 Q 333,420 312,468 291,516 273.5,582 256,648 256,704 q 0,49 3.5,91 3.5,42 14,90 10.5,48 28,88 17.5,40 47,81.5 29.5,41.5 68.5,74 39,32.5 94.5,61.5 55.5,29 124.5,48.5 69,19.5 159.5,30.5 90.5,11 196.5,11 h 160 v 192 q 0,42 39,59 13,5 25,5 26,0 45,-19 l 384,-384 q 19,-19 19,-45 0,-26 -19,-45 z"></path>
										</g>
									</svg>
								</a>
							)
						)
					}
					</section>
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
								tempProject.images.map(
									( tImage ) =>
									(
										<a className="image" key={ tImage.url } href={ tImage.url } target="_blank">
											<img src={ tImage.thumbnail } alt=""/>
										</a>
									)
								)
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
							<h3>Credits</h3>
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
			</article>
		);
	}
}