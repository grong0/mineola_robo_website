import React from "react";
import "../styles/Home.css";

import WelcomePage from "./WelcomePage";
import FRC from "./FRCRobots";
import TheTeam from "./FRCTeam";
import OutReach from "./OutReachEvents";
import MiniOutReach from "./MiniOutReach";
import WhoWeAre from "./WhoWeAre.js";
import SponsorsPage from "./SponsorsPage.js";
import MiniSponsors from "./MiniSponsors.js";

function Home() {
	return (
		<div className="page" id="homeContent">
			<WelcomePage />
			{/* Games */}
			<MiniSponsors />
			<WhoWeAre />
			<MiniOutReach />
		</div>
	);
}

export default Home;
