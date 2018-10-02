import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import Data from "./data";

ReactDOM.render(
	(
		<BrowserRouter>
			<App projects={ Data.projects }/>
		</BrowserRouter>
	),
	document.getElementById( "root" )
);