import React, { useEffect } from "react";
import "../styles/WhoWeAre.css";

function WhoWeAre() {
	return (
		<div className="content" id="whoweare">
			<div className="titleElement">
				<div>Who We Are</div> {/* or: Who are we? */}
				<div>A little about us</div>
			</div>

			<div id="slideshow-container">
				<div className="description" id="over-slideshow">
					&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vel amet ea ipsum
					odio veniam quaerat numquam iure, dolorum suscipit et iusto porro facilis corporis
					repellat ducimus fuga hic? Eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Inventore minus, similique alias quis accusamus neque architecto deserunt quam esse
					quae hic voluptates iusto accusantium vel mollitia sunt expedita. Asperiores, maxime!
				</div>
				<div id="slideshow">
					<div id="top-slideshow">
						<div className="long-img" id="left-long">
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
						</div>
					</div>
					<div id="bot-slideshow">
						<div className="long-img" id="right-long">
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
							<img src="./assets/tempImg.jpg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhoWeAre;
