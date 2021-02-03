//import react
import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card col-lg-3 col-xl-3 col-md-6 col-sm-12 p-0">
			<img
				className="card-img-top"
				src={props.imageSrc}
				alt="Card image cap"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text p-0">{props.description}</p>
				<a href={"#" + props.cardLink} className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	imageSrc: PropTypes.string,
	description: PropTypes.string,
	cardLink: PropTypes.string
};
