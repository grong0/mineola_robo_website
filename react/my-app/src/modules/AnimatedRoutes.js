import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home.js";
import FRC from "./FRC.js";
import OutReach from "./OutReach.js";
// import About from "./About.js"; // Probably not going to exist
// import Contact from "./Contact.js";
// import ScoutCode from "./ScoutCode.js";

import Footer from "./Footer.js";
import Sponsors from "./Sponsors.js";

function AnimatedRoutes() {
	var location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route exact path="/" element={<Home />} />
				{/* <Route path={"/about"} element={<About />}/> */}
				<Route path="/frc" element={<FRC />} />
				<Route path="/outreach" element={<OutReach />} />
                <Route path="/sponsors" element={<Sponsors />} />
				{/* <Route path={"/contact"} element={<Contact />}/> */}
				{/* <Route path={"/scoutCode"} element={<ScoutCode />}/> */}
			</Routes>
            <Footer />
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
