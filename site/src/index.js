import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import Data from "./data";
import "./index.css";

ReactDOM.render(
	(
		<BrowserRouter>
			<App projects={ Data.projects } isTouch={ window.navigator.msMaxTouchPoints || "ontouchstart" in document.createElement( "div" ) }/>
		</BrowserRouter>
	),
	document.getElementById( "root" )
);