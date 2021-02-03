//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
//import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { NavBar } from "./component/NavBar/navbar.js";
import { Content } from "./component/content/content.js";
import { Footer } from "./component/footer/footer.js";
//render your react application
ReactDOM.render(
	<div>
		<NavBar />
		<Content />
		<Footer />
	</div>,
	document.querySelector("#app")
);
