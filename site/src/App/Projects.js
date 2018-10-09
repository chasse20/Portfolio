import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default class Projects extends Component
{
	constructor( tProps )
	{
		super( tProps );
		
		this._swipeStart = 0;
		
		this.state =
		{
			projectKeys: Projects.GenerateKeys( this.props.projects )
		};
	}
	
	static GenerateKeys( tProjects )
	{
		if ( tProjects != null )
		{
			const tempProjects = [];
			for ( let tempKey in tProjects )
			{
				tempProjects.push( tempKey );
			}
			
			return tempProjects;
		}
		
		return null;
	}
	
	shouldComponentUpdate( tNextProps, tNextState )
	{
		if ( tNextProps.projects !== this.props.projects )
		{
			this.setState( { projectKeys: Projects.GenerateKeys( this.props.projects ) } );
			
			return true;
		}
		
		return tNextState.projectKeys !== this.state.projectKeys || tNextProps.isOpen !== this.props.isOpen;
	}

	onScroll( tDirection )
	{
		const tempArray = [];
		var tempLastIndex = this.state.projectKeys.length;
		tempArray.length = tempLastIndex;
		tempLastIndex -= 1;
		
		if ( tDirection < 0 )
		{
			for ( let i = tempLastIndex; i > 0; --i )
			{
				tempArray[i] = this.state.projectKeys[ i - 1 ];
			}
			tempArray[0] = this.state.projectKeys[ tempLastIndex  ];
		}
		else if ( tDirection > 0 )
		{
			for ( let i = ( tempLastIndex - 1 ); i >= 0; --i )
			{
				tempArray[i] = this.state.projectKeys[ i + 1 ];
			}
			tempArray[ tempLastIndex ] = this.state.projectKeys[0];
		}
		
		this.setState( { projectKeys: tempArray } );
	}
	
	onTouchStart( tEvent )
	{
		this._swipeStart = tEvent.touches[0].clientX;
	}
	
	onTouchEnd( tEvent )
	{
		const tempDistance = this._swipeStart - tEvent.changedTouches[0].clientX;
		if ( tempDistance <= -60 )
		{
			this.onScroll( -1 );
		}
		else if ( tempDistance >= 60 )
		{
			this.onScroll( 1 );
		}
	}
	
	render()
	{
		return (
			<div id="projects" className={ this.props.isOpen ? "open" : null } onTouchStart={ ( tEvent ) => { this.onTouchStart( tEvent ); } } onTouchEnd={ ( tEvent ) => { this.onTouchEnd( tEvent ); } }>
				<div id="container">
					{
						this.state.projectKeys.map(
							( tProjectKey ) =>
							{
								const tempProject = this.props.projects[ tProjectKey ];
								
								return (
									<div className="project-tile" key={ tProjectKey }>
										<div className="image" style={ { backgroundImage: "url(" + tempProject.tileImage + ")" } }/>
										<div className="info">
											<h1>{ tempProject.name }</h1>
											<h2>{ tempProject.platform }</h2>
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
				<button className="control" id="left-control" onClick={ () => { this.onScroll( -1 ); } }>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 28 13 30" xmlSpace ="preserve">
						<path d="M12.3,53l-10-10l10-10l2.4,2.3L7,43l7.6,7.7L12.3,53z"/>
					</svg>
				</button>
				<button className="control" id="right-control" onClick={ () => { this.onScroll( 1 ); } }>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 28 13 30" xmlSpace ="preserve">
						<path d="M2.3,50.7L10,43l-7.6-7.7L4.7,33l10,10l-10,10L2.3,50.7z"/>
					</svg>
				</button>
			</div>
		);
	}
}