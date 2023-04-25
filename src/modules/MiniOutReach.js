import React from "react";
import "../styles/MiniOutReach.css";
import { Link } from "react-router-dom";
import { wrapperEle } from "./NavHub";

function scrollUp() {
    if (wrapperEle) {
        wrapperEle.scrollTo(0, 0);
    }
}

function MiniOutReach() {
	return (
		<div className="content" id="miniOutReach">
			<div className="titleElement">
				<div>Outreach</div>
				<div>
					Click{" "}
					<Link id="inline-outreach-link" to="/outreach" onTap={scrollUp}>
						<em>here</em>
					</Link>{" "}
					to learn more
				</div>
			</div>

			<p className="description" id="mini-outreach-paragraph">
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
