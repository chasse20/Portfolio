import React from "react";
import { Link } from "react-router-dom";
import Style from "./Projects.module.css";

export default class Projects extends React.Component
{
	constructor( tProps )
	{
		super( tProps );
		
		// State
		this.state =
		{
			projectKeys: Projects.GenerateKeys( this.props.projects ),
			selectedProject: null,
			redirect: null,
			scrollVelocity: 0
		};
		
		// Variables
		this._element = null;
		this._containerElement = null;
		this._swipeStart = 0;
		this._scrollTimeout = null;
		
		// Events
		this._onElement = ( tComponent ) => { this._element = tComponent; };
		this._onContainerElement = ( tComponent ) => { this._containerElement = tComponent; };
		this._onTouchStart = ( tEvent ) => { this._swipeStart = tEvent.touches[0].clientX; };
		this._onTouchEnd = ( tEvent ) => { this.onTouchEnd( tEvent ); };
		this._onLeftArrow = () => { this.onScroll( -1 ); };
		this._onRightArrow = () => { this.onScroll( 1 ); };
		
		this._onPageClick = ( tEvent ) => { this.onPageClick( tEvent ); };
		this._onResize = () => { this._element.style.setProperty( "--vh", window.innerHeight * 0.01 + "px" ); };
	}
	
	componentDidMount()
	{
		this.setState( { projectKeys: Projects.GenerateKeys( this.props.projects, this.isMobile ) } );
		
		this._onResize();
		window.addEventListener( "resize", this._onResize );		
	}
	
	componentWillUnmount()
	{
		if ( this._scrollTimeout !== null )
		{
			this.window.clearTimeout( this._scrollTimeout );
		}
		
		window.removeEventListener( "resize", this._onResize );
	}
	
	get isMobile()
	{
		return parseInt( window.getComputedStyle( this._element ).getPropertyValue( "--mobile" ) ) === 1;
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

	onScroll( tVelocity )
	{
		if ( tVelocity !== this.state.scrollVelocity )
		{
			this.setState( { scrollVelocity: tVelocity } );
			
			this._scrollTimeout = window.setTimeout(
				() =>
				{
					// Swap project elements
					var tempArray = this.state.projectKeys;
					if ( this.state.scrollVelocity < 0 )
					{
						const tempLastIndex = tempArray.length - 1;
						const tempLastElement = tempArray[ tempLastIndex ];
						tempArray = tempArray.slice( 0, tempLastIndex );
						tempArray.unshift( tempLastElement );
					}
					else
					{
						const tempFirstElement = tempArray[0];
						tempArray = tempArray.slice( 1 );
						tempArray.push( tempFirstElement );
					}
					
					// Apply
					this.setState(
						{
							scrollVelocity: 0,
							projectKeys: tempArray
						}
					);
				},
				parseFloat( Style.scrollTime ) * 1000
			);
		}
	}
	
	onProjectClick( tEvent, tProjectKey )
	{
		tEvent.stopPropagation();

		if ( !this.props.isTouch )
		{
			this.props.history.push( tProjectKey );
		}
		else if ( this.state.selectedProject === tProjectKey )
		{
			this.props.history.push( tProjectKey );
			this.setState( { selectedProject: null } );
		}
		else
		{
			this.setState( { selectedProject: tProjectKey } );
		}
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
			
			// Mobile scrolling needs the last project to be the first
			if ( tIsMobile )
			{
				tempProjects.unshift( tempProjects.pop() );
			}
			
			return tempProjects;
		}
		
		return null;
	}
	
	render()
	{
		// Container class
		var tempContainerClass = `${ Style.container }`;
		if ( this.state.scrollVelocity < 0 )
		{
			tempContainerClass += ` ${ Style.slideLeft }`;
		}
		else if ( this.state.scrollVelocity > 0 )
		{
			tempContainerClass += ` ${ Style.slideRight }`;
		}
		
		// Render
		return (
			<nav className={ `${ Style.projects }` + ( this.props.isOpen ? ` ${ Style.projectsOpen }` : "" ) } ref={ this._onElement }>
				<div className={ Style.swipe } onTouchStart={ this._onTouchStart } onTouchEnd={ this._onTouchEnd }/>
				<div className={ tempContainerClass } ref={ this._onContainerElement }>
					{
						this.state.projectKeys.map(
							( tProjectKey ) =>
							{
								const tempProject = this.props.projects[ tProjectKey ];
								
								return (
									<div className={ `${ Style.project }` + ( this.state.selectedProject === tProjectKey ? ` ${ Style.projectSelected }` : "" ) } key={ tProjectKey }>
										<div className={ Style.bg }>
											<div className={ Style.mobile } style={ { backgroundImage: "url(" + tempProject.mobileImage + ")" } }/>
											<div className={ Style.wide } style={ { backgroundImage: "url(" + tempProject.wideImage + ")" } }/>
											<div className={ Style.tablet } style={ { backgroundImage: "url(" + tempProject.buttonImage + ")" } }/>
										</div>
										<div className={ Style.info }>
											<h1 className={ Style.h1 }>{ tempProject.name }</h1>
											<h2 className={ Style.h2 }>{ tempProject.platform }</h2>
											<Link className={ Style.more } to={ tProjectKey }>
												<h3 className={ Style.h3 }>View Info</h3>
											</Link>
										</div>
										<div className={ Style.select } onClick={ ( tEvent ) => { this.onProjectClick( tEvent, tProjectKey ); } }/>
									</div>
								);
							}
						)
					}
				</div>
				<button className={ Style.leftArrow } onClick={ this._onLeftArrow }>
					<img src="images/arrow.svg" alt="left arrow"/>
				</button>
				<button className={ Style.rightArrow } onClick={ this._onRightArrow }>
					<img src="images/arrow.svg" alt="right arrow"/>
				</button>
			</nav>
		);
	}
}