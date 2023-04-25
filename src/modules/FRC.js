import React from "react";
import "../styles/FRC.css";

import FRCRobots from "./FRCRobots";
import FRCTeam from "./FRCTeam";

function FRC() {
	return (
		<div className="page" id="frc">
			<FRCRobots />
			<FRCTeam />
		</div>
	);
}

export default FRC;
