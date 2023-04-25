import React from "react";
import "../styles/Home.css";

import WelcomePage from "./WelcomePage";
import MiniSponsors from "./MiniSponsors.js";
import WhoWeAre from "./WhoWeAre.js";
import CurrentRobot from "./CurrentRobot";
import MiniOutReach from "./MiniOutReach";

function Home() {
	return (
		<div className="page" id="homeContent">
			<WelcomePage />
			<MiniSponsors />
			<WhoWeAre />
            <CurrentRobot />
			<MiniOutReach />
		</div>
	);
}

export default Home;
