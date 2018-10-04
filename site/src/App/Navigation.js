import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component
{
	constructor( tProps )
	{
		super( tProps );

		this.state =
		{
			isOpen: false
		}
	}
	
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextState.isOpen !== this.state.isOpen;
	}

	onMenuToggle()
	{
		this.setState( { isOpen: !this.state.isOpen } );
	}

	render()
	{
		return (
			<nav>
				<header>
					<Link to="/" id="logo">
						<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient gradientUnits="userSpaceOnUse" y2="530.42" x2="422.88" y1="578.01" x1="423.61" id="0">
									<stop stopColor="#1f2121"></stop>
									<stop offset="1" stopColor="#404447"></stop>
								</linearGradient>
								<linearGradient id="1" gradientUnits="userSpaceOnUse" y1="543.05" x2="0" y2="503.05">
									<stop stopColor="#d8d8d8"></stop>
									<stop offset="1" stopColor="#fff"></stop>
								</linearGradient>
							</defs>
							<g transform="matrix(1.16875 0 0 1.16875-453.29-587.31)">
								<circle transform="matrix(.8076 0 0 .8076 66.28 74.824)" cx="423.59" cy="555.01" r="25.427" fill="url(#0)" fillRule="evenodd"></circle>
								<g fill="url(#1)">
									<path d="m408.32 505.05c9.972 0 18 8.03 18 18 0 9.972-8.03 18-18 18-8.212 0-15.1-5.45-17.273-12.941l6.871 2.758c.52 2.388 2.648 4.184 5.188 4.184 2.751 0 5.02-2.109 5.285-4.793l6.812-4.984c3.928 0 7.117-3.178 7.117-7.105 0-3.929-3.189-7.117-7.117-7.117-3.907 0-7.078 3.152-7.113 7.05l-4.434 6.352c-.181-.018-.365-.028-.551-.028-.991 0-1.916.271-2.711.746l-9.973-4.01c.94-9.08 8.566-16.11 17.898-16.11"></path>
									<path d="m415.22 514.33c-2.103 0-3.809 1.709-3.809 3.813 0 2.103 1.705 3.812 3.809 3.812 2.104 0 3.813-1.709 3.813-3.812 0-2.104-1.709-3.813-3.813-3.813"></path>
									<path d="m403.11 525.83c2.165 0 3.906 1.741 3.906 3.906 0 2.165-1.741 3.906-3.906 3.906-1.506 0-2.805-.841-3.457-2.082.642.259 1.284.516 1.926.777 1.592.64 3.407-.13 4.047-1.723.64-1.592-.138-3.399-1.73-4.04l-1.629-.652c.271-.058.554-.094.844-.094"></path>
								</g>
							</g>
						</svg>
						<h1>Chris Hassebrook</h1>
					</Link>
					<svg viewBox="0 0 20 30" xmlns="http://www.w3.org/1999/xlink" id="menu-toggle" className={ this.state.isOpen ? "open" : null } onClick={ () => { this.onMenuToggle(); } }>
						<rect height="2" width="20" y="7" x="0"/>
						<rect height="2" width="20" y="14" x="0"/>
						<rect height="2" width="20" y="21" x="0"/>
					</svg>
				</header>
				<div id="links" className={ this.state.isOpen ? "open" : null }>
					<a href="Resume.pdf" target="_blank">
						<svg viewBox="0 0 550.801 550.801" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="M267.342,414.698c-6.613,0-10.884,0.585-13.413,1.165v85.72c2.534,0.586,6.616,0.586,10.304,0.586
									c26.818,0.189,44.315-14.576,44.315-45.874C308.738,429.079,292.803,414.698,267.342,414.698z"></path>
								<path d="M152.837,414.313c-6.022,0-10.104,0.58-12.248,1.16v38.686c2.531,0.58,5.643,0.78,9.903,0.78
									c15.757,0,25.471-7.973,25.471-21.384C175.964,421.506,167.601,414.313,152.837,414.313z"></path>
								<path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
									c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
									c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
									c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
									C475.2,132.796,475.137,132.398,475.095,131.992z M193.261,463.873c-10.104,9.523-25.072,13.806-42.569,13.806
									c-3.882,0-7.391-0.2-10.102-0.58v46.839h-29.35V394.675c9.131-1.55,21.967-2.721,40.047-2.721
									c18.267,0,31.292,3.501,40.036,10.494c8.363,6.612,13.985,17.497,13.985,30.322C205.308,445.605,201.042,456.49,193.261,463.873z
									M318.252,508.392c-13.785,11.464-34.778,16.906-60.428,16.906c-15.359,0-26.238-0.97-33.637-1.94V394.675
									c10.887-1.74,25.083-2.721,40.046-2.721c24.867,0,41.004,4.472,53.645,13.995c13.61,10.109,22.164,26.241,22.164,49.37
									C340.031,480.4,330.897,497.697,318.252,508.392z M439.572,417.225h-50.351v29.932h47.039v24.11h-47.039v52.671H359.49V392.935
									h80.082V417.225z M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"></path>
								<path d="M386.205,232.135c-0.633-0.059-15.852-1.448-39.213-1.448c-7.319,0-14.691,0.143-21.969,0.417
									c-46.133-34.62-83.919-69.267-104.148-88.684c0.369-2.138,0.623-3.828,0.741-5.126c2.668-28.165-0.298-47.179-8.786-56.515
									c-5.558-6.101-13.721-8.131-22.233-5.806c-5.286,1.385-15.071,6.513-18.204,16.952c-3.459,11.536,2.101,25.537,16.708,41.773
									c0.232,0.246,5.189,5.44,14.196,14.241c-5.854,27.913-21.178,88.148-28.613,117.073c-17.463,9.331-32.013,20.571-43.277,33.465
									l-0.738,0.844l-0.477,1.013c-1.16,2.437-6.705,15.087-2.542,25.249c1.901,4.62,5.463,7.995,10.302,9.767l1.297,0.349
									c0,0,1.17,0.253,3.227,0.253c9.01,0,31.25-4.735,43.179-48.695l2.89-11.138c41.639-20.239,93.688-26.768,131.415-28.587
									c19.406,14.391,38.717,27.611,57.428,39.318l0.611,0.354c0.907,0.464,9.112,4.515,18.721,4.524l0,0
									c13.732,0,23.762-8.427,27.496-23.113l0.189-1.004c1.044-8.393-1.065-15.958-6.096-21.872
									C407.711,233.281,387.978,232.195,386.205,232.135z M142.812,319.744c-0.084-0.1-0.124-0.194-0.166-0.3
									c-0.896-2.157,0.179-7.389,1.761-11.222c6.792-7.594,14.945-14.565,24.353-20.841
									C159.598,317.039,146.274,319.603,142.812,319.744z M200.984,122.695L200.984,122.695c-14.07-15.662-13.859-23.427-13.102-26.041
									c1.242-4.369,6.848-6.02,6.896-6.035c2.824-0.768,4.538-0.617,6.064,1.058c3.451,3.791,6.415,15.232,5.244,36.218
									C202.764,124.557,200.984,122.695,200.984,122.695z M193.714,256.068l0.243-0.928l-0.032,0.011
									c7.045-27.593,17.205-67.996,23.047-93.949l0.211,0.201l0.021-0.124c18.9,17.798,47.88,43.831,82.579,70.907l-0.39,0.016
									l0.574,0.433C267.279,235.396,228.237,241.84,193.714,256.068z M408.386,265.12c-2.489,9.146-7.277,10.396-11.665,10.396l0,0
									c-5.094,0-9.998-2.12-11.116-2.632c-12.741-7.986-25.776-16.688-38.929-25.998c0.105,0,0.2,0,0.316,0
									c22.549,0,37.568,1.369,38.158,1.411c3.766,0.14,15.684,1.9,20.82,7.938C407.984,258.602,408.755,261.431,408.386,265.12z"></path>
							</g>
						</svg>
						<h2>Resume</h2>
					</a>
					<a href="Github" target="_blank">
						<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"></path>
						</svg>
						<h2>Github</h2>
					</a>
					<a href="Email" target="_blank">
						<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="M512,16L0,398.2v608h1024v-608L512,16z M370.4,288.8c15-27.4,35.8-48.2,62-61.8c26.199-13.8,56.199-20.8,90-20.8
									c28.6,0,54,5.6,76.199,16.6c22.2,11.2,39.2,27,51,47.4c11.601,20.6,17.601,43,17.601,67.2c0,29-9,55-26.8,78.6
									c-22.4,29.4-51,44.2-86,44.2c-9.4,0-16.4-1.601-21.2-5c-4.8-3.4-8-8.2-9.601-14.601C510.2,453.6,494.8,460,477.2,460
									c-18.8,0-34.4-6.6-46.8-19.4C418,427.6,411.8,410.2,411.8,388.8c0-26.8,7.4-51,22.4-73c18.2-26.8,41.399-40.2,69.8-40.2
									c20.2,0,35.2,7.8,44.8,23.2l4.4-19h45L572.4,402c-1.601,7.8-2.4,12.6-2.4,15c0,3,0.6,5,2,6.4c1.2,1.399,2.8,2.199,4.6,2.199
									c5.601,0,12.601-3.199,21.2-9.8c11.601-8.6,21-20.2,28-34.6c7.2-14.6,10.8-29.6,10.8-45.2c0-27.8-10-51.2-30.199-70.2
									c-20.2-18.6-48.601-28.2-84.801-28.2c-30.8,0-56.8,6.2-78.199,19C422,269,406,286.8,395,309.6c-10.8,22.6-16.2,46.4-16.2,71
									c0,23.8,6.2,45.8,18.2,65.4c12.2,19.8,29.2,34,51,43s46.8,13.4,75,13.4c27,0,50.4-3.801,70-11.4s35.2-18.8,47.2-34h36.2
									c-11.4,23-28.801,41-52.2,54.2c-27,15-59.8,22.399-98.4,22.399c-37.6,0-69.8-6.199-97-19C401.4,502,381.2,483.2,368,458.6
									C354.8,434,348.2,407,348.2,378C347.8,346.2,355.2,316.4,370.4,288.8z M36.2,410.4L414,663.8L36.2,956.2V410.4z M64.8,975.6
									L512,629.4L959.2,975.6H64.8z M987.8,956.2L610,663.8L987.8,410.4V956.2z"></path>
								<path d="M508,306c-9.6,0-18.6,3.8-27,11.4s-14.6,18.2-18.8,32.2S456,376,456,386.8c0,14.4,2.8,25,8.6,31.8
									c6,6.801,13.2,10.2,21.801,10.2c6.6,0,12.6-1.6,18.199-4.8c4.2-2.2,8.601-5.8,12.801-10.6c6-7,11.199-17,15.6-30.4
									c4.4-13.2,6.6-25.6,6.6-37c0-12.8-3-22.6-9-29.4C524.6,309.8,517,306.2,508,306z"></path>
							</g>
						</svg>
						<h2>Email</h2>
					</a>
				</div>
			</nav>
		);
	}
}