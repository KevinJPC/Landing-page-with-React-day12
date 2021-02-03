//import react
import React from "react";
import { NavItem } from "./navitems.js";

export function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid col-lg-9 d-flex justify-content-between p-0">
				<div>
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse col-lg-5 col-xl-4 justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<NavItem />
					</ul>
				</div>
			</div>
		</nav>
	);
}
