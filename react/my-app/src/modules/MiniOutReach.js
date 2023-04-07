import React from "react";
import "../styles/MiniOutReach.css";

function MiniOutReach() {
	return (
		<div className="content" id="miniOutReach">
			<div className="titleElement">
				<div>Outreach</div>
				<div></div>
			</div>
			
			<p className="description">
				&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vel amet ea ipsum
				odio veniam quaerat numquam iure, dolorum suscipit et iusto porro facilis corporis repellat
				ducimus fuga hic? Eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Inventore minus, similique alias quis accusamus neque architecto deserunt quam esse quae hic
				voluptates iusto accusantium vel mollitia sunt expedita. Asperiores, maxime!
			</p>

            <div id="miniOutReach_images">
				<div id="miniOutReach_image">
					<img src="../assets/tempImg.jpg" />
					<div className="subtitle">Lorem Ipsum</div>
				</div>
				<div id="miniOutReach_image">
					<img src="../assets/tempImg.jpg" />
					<div className="subtitle">Lorem Ipsum</div>
				</div>
			</div>
		</div>
	);
}

export default MiniOutReach;
