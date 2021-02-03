//import react
import React from "react";

export function NavItem() {
	let items = [
		{ label: "Home", link: "" },
		{ label: "About", link: "" },
		{ label: "Services", link: "" },
		{ label: "Contact", link: "" }
	];

	let itemsInHTML = items.map((item, index) => {
		return (
			<li className="nav-item" key={index}>
				<a className="nav-link" href="">
					{item.label}
				</a>
			</li>
		);
	});
	return itemsInHTML;
}
