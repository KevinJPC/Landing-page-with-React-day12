//import react
import React from "react";
import { Card } from "./card";

export function CardRows() {
	return (
		<div className="card-deck">
			<Card
				title="Card title"
				imageSrc="https://picsum.photos/500/325"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				cardLink="https://google.com"
			/>
			<Card
				title="Card title"
				imageSrc="https://picsum.photos/500/325"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				cardLink="https://google.com"
			/>
			<Card
				title="Card title"
				imageSrc="https://picsum.photos/500/325"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				cardLink="https://google.com"
			/>
			<Card
				title="Card title"
				imageSrc="https://picsum.photos/500/325"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				cardLink="https://google.com"
			/>
		</div>
	);
}
