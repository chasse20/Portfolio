import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery"; 
import "./Projects.css";

export default class Projects extends Component
{
	constructor( tProps )
	{
		super( tProps );
		
		this.state =
		{
			projectKeys: Projects.GenerateKeys( this.props.projects ),
			selectedProject: null
		};
		
		this._scrollElement = null;
		this._swipeStart = 0;
		this._isScrolling = false;
		this._scrollTimeout = null;
		this._isMobile = false;
		this._onPageClick = ( tEvent ) =>
		{
			this.onPageClick( tEvent );
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
		
		return tNextState.projectKeys !== this.state.projectKeys || tNextProps.isOpen !== this.props.isOpen || tNextState.selectedProject !== this.state.selectedProject;
	}

	componentWillUnmount()
	{
		this.window.clearTimeout( this._scrollTimeout );
	}

	onScroll( tDirection )
	{
		if ( !this._isAnimating )
		{
			this._isAnimating = true;
			this._scrollElement.classList.add( "sliding" );
			this._scrollElement.style.transform = "translateX(" + -tDirection * 100 + "vw)";
			this._scrollTimeout = window.setTimeout( this.onScrollFinish.bind( this, tDirection ), 200 );
		}
	}

	onScrollFinish( tDirection )
	{
		this._isAnimating = false;

		// Swap elements
		console.log( this.state )
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
		
		this._scrollElement.classList.remove( "sliding" );
		this._scrollElement.style.transform = "translateX(0)";

		console.log( this );
		this.setState( { projectKeys: tempArray } );
	}
	
	onProjectSwipeStart( tEvent )
	{
		this._isMobile = window.getComputedStyle( document.documentElement ).getPropertyValue( "--mobile" ).indexOf( "1" ) >= 0; // a hack to only allow mobile resolutions to swipe
		if ( this._isMobile )
		{
			this._swipeStart = tEvent.touches[0].clientX;
		}
	}
	
	onProjectSwipeEnd( tEvent )
	{
		if ( this._isMobile )
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
	}
	
	onProjectClick( tEvent, tProjectKey )
	{
		if ( !this._isMobile )
		{
			tEvent.stopPropagation();
			if ( !this.props.isTouch || this.state.selectedProject === tProjectKey )
			{
				this.setState( { selectedProject: null } );
				window.removeEventListener( "click", this._onPageClick );
				this.props.history.push( tProjectKey );
			}
			else
			{
				this.setState( { selectedProject: tProjectKey } );
				window.addEventListener( "click", this._onPageClick );
			}
		}
	}
	
	onPageClick( tEvent )
	{
		this.setState( { selectedProject: null } );
		window.removeEventListener( "click", this._onPageClick );
	}
	
	render()
	{
		return (
			<div id="projects" className={ this.props.isOpen ? "open" : null } onTouchStart={ ( tEvent ) => { this.onProjectSwipeStart( tEvent ); } } onTouchEnd={ ( tEvent ) => { this.onProjectSwipeEnd( tEvent ); } }>
				<div id="container" ref={ ( tElement ) => { this._scrollElement = tElement; } }>
					{
						this.state.projectKeys.map(
							( tProjectKey ) =>
							{
								const tempProject = this.props.projects[ tProjectKey ];
								
								return (
									<div className={ "project-tile" + ( this.state.selectedProject === tProjectKey ? " selected" : "" ) } key={ tProjectKey } onClick={ ( tEvent ) => { this.onProjectClick( tEvent, tProjectKey ); } }>
										<div className="image-container">
											<div className="image" style={ { backgroundImage: "url(" + tempProject.tileImage + ")" } }/>
											<div className="image-outline"/>
										</div>
										<div className="info">
											<h1>{ tempProject.name }</h1>
											<h2>{ tempProject.platform }</h2>
											<Link className="more" to={ tProjectKey }>
												<h3>Learn More</h3>
											</Link>
											<div className="arrow">
												<img src="images/arrow.svg" alt="right arrow"/>
											</div>
										</div>
									</div>
								);
							}
						)
					}
				</div>
				<button className="control" id="left-control" onClick={ () => { this.onScroll( -1 ); } }>
					<img src="images/arrow.svg" alt="left arrow"/>
				</button>
				<button className="control" id="right-control" onClick={ () => { this.onScroll( 1 ); } }>
					<img src="images/arrow.svg" alt="right arrow"/>
				</button>
			</div>
		);
	}
}