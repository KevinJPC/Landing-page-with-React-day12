//import react
import React from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

export function Jumbotron(props) {
	return (
		<div className="jumbotron pt-0">
			<h1 className="display-4">{props.welcome}</h1>
			<p className="lead">{props.description}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href={"#" + props.btnUrl}
					role="button">
					{props.btnLabel}
				</a>
			</p>
		</div>
	);
}

Jumbotron.propTypes = {
	welcome: PropTypes.string,
	description: PropTypes.string,
	btnLabel: PropTypes.string,
	btnUrl: PropTypes.string
};
