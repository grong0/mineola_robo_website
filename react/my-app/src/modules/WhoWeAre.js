import React, { useEffect } from "react";
import "../styles/WhoWeAre.css";

function WhoWeAre() {
	return (
		<div className="content" id="whoweare">
			<div className="titleElement">
				<div>Who We Are</div> {/* or: Who are we? */}
				<div></div>
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

			<div className="description">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident veniam odio molestiae
				magnam quam optio laboriosam voluptate sed, nisi incidunt repudiandae recusandae nihil iure
				praesentium nesciunt atque architecto officiis consequuntur?
			</div>
		</div>
	);
}

export default WhoWeAre;
