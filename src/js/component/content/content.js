//import react
import React from "react";
import { Jumbotron } from "./Jumbotron/jumbotron.js";
import { CardRows } from "./card/cardRows.js";
export function Content() {
	return (
		<div className="content d-flex justify-content-center">
			<div className="col-lg-9 px-lg-1 px-0">
				<Jumbotron
					welcome="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis nisi non ex lacinia porttitor. Nulla sit amet fringilla dui, a iaculis sapien. Cras scelerisque, nisi vel fermentum gravida, augue."
					btnUrl=""
					btnLabel="Call to action!"
				/>
				<CardRows />
			</div>
		</div>
	);
}
