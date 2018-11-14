import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default class Projects extends Component
{
	constructor( tProps )
	{
		super( tProps );
		
		this._isMobile = this.isMobile;
		
		this.state =
		{
			projectKeys: Projects.GenerateKeys( this.props.projects, this._isMobile ),
			selectedProject: null
		};
		
		this._scrollElement = null;
		this._swipeStart = 0;
		this._isScrolling = false;
		this._scrollTimeout = null;
		this._onPageClick = ( tEvent ) =>
		{
			this.onPageClick( tEvent );
		};
	}
	
	static GenerateKeys( tProjects, tIsMobile )
	{
		if ( tProjects != null )
		{
			const tempProjects = [];
			for ( let tempKey in tProjects )
			{
				tempProjects.push( tempKey );
			}
			
			if ( tIsMobile )
			{
				tempProjects.unshift( tempProjects.pop() );
			}
			
			return tempProjects;
		}
		
		return null;
	}
	
	shouldComponentUpdate( tNextProps, tNextState )
	{
		if ( tNextProps.projects !== this.props.projects )
		{
			this.setState( { projectKeys: Projects.GenerateKeys( this.props.projects, this._isMobile ) } );
			
			return true;
		}
		
		return tNextState.projectKeys !== this.state.projectKeys || tNextProps.isOpen !== this.props.isOpen || tNextState.selectedProject !== this.state.selectedProject;
	}

	componentWillUnmount()
	{
		this.window.clearTimeout( this._scrollTimeout );
	}
	
	get isMobile()
	{
		return window.getComputedStyle( document.documentElement ).getPropertyValue( "--mobile" ).indexOf( "1" ) >= 0;
	}

	onScroll( tDirection )
	{
		if ( !this._isAnimating )
		{
			if ( tDirection < 0 )
			{
				// swap last to first, set translateX from 100vw to 0
			}

			this._isAnimating = true;
			this._scrollElement.classList.add( tDirection > 0 ? "sliding-right" : "sliding-left" );
			this._scrollTimeout = window.setTimeout( this.onScrollFinish.bind( this, tDirection ), 400 );
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
			
			this._scrollElement.classList.remove( "sliding-left" );
		}
		else if ( tDirection > 0 )
		{
			for ( let i = ( tempLastIndex - 1 ); i >= 0; --i )
			{
				tempArray[i] = this.state.projectKeys[ i + 1 ];
			}
			tempArray[ tempLastIndex ] = this.state.projectKeys[0];
			
			this._scrollElement.classList.remove( "sliding-right" );
		}

		this.setState( { projectKeys: tempArray } );
	}
	
	onProjectSwipeStart( tEvent )
	{
		this._isMobile = this.isMobile; // a hack to only allow mobile resolutions to swipe
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
			<div className="projects" className={ this.props.isOpen ? "open" : null } onTouchStart={ ( tEvent ) => { this.onProjectSwipeStart( tEvent ); } } onTouchEnd={ ( tEvent ) => { this.onProjectSwipeEnd( tEvent ); } }>
				<div className="container" ref={ ( tElement ) => { this._scrollElement = tElement; } }>
					{
						this.state.projectKeys.map(
							( tProjectKey ) =>
							{
								const tempProject = this.props.projects[ tProjectKey ];
								
								return (
									<div className={ "project-tile" + ( this.state.selectedProject === tProjectKey ? " selected" : "" ) } key={ tProjectKey } onClick={ ( tEvent ) => { this.onProjectClick( tEvent, tProjectKey ); } }>
										<div className="image-container">
											<div className="mobile-tile" style={ { backgroundImage: "url(" + tempProject.mobileImage + ")" } }/>
											<div className="wide-tile" style={ { backgroundImage: "url(" + tempProject.wideImage + ")" } }/>
											<div className="button-tile" style={ { backgroundImage: "url(" + tempProject.buttonImage + ")" } }/>
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
				<button className="control" className="left-control" onClick={ () => { this.onScroll( -1 ); } }>
					<img src="images/arrow.svg" alt="left arrow"/>
				</button>
				<button className="control" className="right-control" onClick={ () => { this.onScroll( 1 ); } }>
					<img src="images/arrow.svg" alt="right arrow"/>
				</button>
			</div>
		);
	}
}