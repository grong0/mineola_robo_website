import React from "react";
import "../styles/MiniSponsors.css";

const sponsors = ["Mineola High School", "Nasa"];

function HomeSponsors() {
	return <img className="mini-sponsors-image" src="./assets/logo/tempLogo.png" />;
}

function MiniSponsors() {
	return (
		<div className="content" id="mini-sponsors">
			<div className="titleElement">
				<div></div>
				<div>We Graciously Thank our Sponsors...</div>
			</div>
			<div className="mini-sponsors-container">
				<div
					id="mini-sponsors-gold"
					ref={(el) => {
						if (el) {
							sponsors.forEach((sponsor) => {
								const sponsorElement = document.createElement("img");
                                sponsorElement.setAttribute("src", "./assets/logos/" + sponsor + ".jpg");
								sponsorElement.setAttribute("alt", sponsor);

                                // const sponsorName = document.createElement("div");
                                // sponsorName.setAttribute("id", "sponsorName");
                                // sponsorName.textContent = sponsor;

                                const sponsorContainer = document.createElement("div");
                                sponsorContainer.setAttribute("id", "sponsorContainer");
                                sponsorContainer.appendChild(sponsorElement);
                                // sponsorContainer.appendChild(sponsorName);
								
								el.appendChild(sponsorContainer);
							});
						}
					}}
				></div>

				{/* <div id="mini-sponsors-gold">
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
				</div>
				<div id="mini-sponsors-silver">
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
				</div>
				<div id="mini-sponsors-bronze">
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
					<img className="mini-sponsors-image" src="./assets/logos/tempLogo.png" />
				</div> */}
			</div>
		</div>
	);
}

export default MiniSponsors;
