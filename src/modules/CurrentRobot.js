import React from "react";
import "../styles/CurrentRobot.css";

function CurrentRobot() {
	return (
		<div className="content" id="current-robot">
			<div className="titleElement">
				<div>Our Current Robot</div>
				<div>Our robot for the 2023 Charged Up Year</div>
			</div>
			<div id="current-robot-container">
				<div id="current-robot-about">
					<div id="current-robot-name">Ghost</div>
					<div id="current-robot-desc">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quae veritatis recusandae
						ab quisquam asperiores minus explicabo harum corrupti? Possimus cupiditate adipisci
						impedit placeat consequuntur. Omnis maxime magni aspernatur sunt!
					</div>
				</div>
				<div id="current-robot-picture-container">
					{/* ghost-2023.jpg */}
					<img id="current-robot-picture" src="./assets/tempImg.jpg" alt="current-robot" />
				</div>
			</div>
		</div>
	);
}

export default CurrentRobot;
