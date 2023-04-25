import React, { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavHub.css";

import AnimatedRoutes from "./AnimatedRoutes";
import { motion } from "framer-motion";

import { updateListItemAnimations } from "./FRCTeam";

const EASE = "easeInOut";
const DURATION = 0.75;
const DELAY = 0.7;

const invert = {
	from: {
		opacity: "0%",
	},
	to: {
		opacity: "100%",
		transition: {
			ease: "easeInOut",
			duration: 3,
			delay: 4,
		},
	},

	opening: {
		filter: "invert(100%)",
	},
	closing: {
		invert: "invert(0%)",
	},

	hover: {
		scale: 1.1,
	},
	tap: {
		scale: 0.9,
	},
};

const buttonBounce = {
	hover: {
		scale: 1.1,
		transition: {
			type: "spring",
			duration: 0.2,
		},
	},
	tap: {
		scale: 0.9,
		transition: {
			type: "spring",
			duration: 0.2,
		},
	},
};

// from{margin-left: -120%;}
//     to{margin-left: 0%;}

const navList = {
	opening: {
		"margin-left": "0%",
	},
	closing: {
		"margin-left": "-120%",
	},
};

const insideNavList = {
	open: {
		height: "100%",
	},
	close: {
		heihgt: "0px",
	},
};

export var wrapperEle = null;

const wrapperFunction = (el) => {
	wrapperEle = el;
};

const wrapper = {
	opening: {
		// height: "90vh",
		// width: "97vw",
		// "margin-top": "69px",
		// "border-radius": "14px",
		left: "23em",
		height: "calc(97vh - 4.5em)",
		top: "4.5em",
		"border-radius": "14px",
	},
	closing: {
		left: "0%",
		height: "100%",
		top: "0%",
		"border-radius": "0px",
		// height: "100vh",
		// width: "100vw",
		// "margin-top": "0px",
		// "border-radius": "0px",
	},
};

function NavHub() {
	const [toggleNavView, setToggleNavView] = useState(false);
	function togglePos() {
		setToggleNavView(toggleNavView ? false : true);
		if (aboutSubList) {
			toggleAboutSubList();
		}
	}

	const [aboutSubList, setAboutSubList] = useState(false);
	function toggleAboutSubList() {
		setAboutSubList(aboutSubList ? false : true);
	}

	function goToAnotherPage() {
		togglePos();
		wrapperEle.scrollTo(0, 0);
	}

	return (
		<>
			<motion.button
				id="menu_button"
				className="idle"
				onClick={togglePos}
				variants={buttonBounce}
				whileHover={"hover"}
				whileTap={"tap"}
			>
				<motion.i
					className="bi bi-list idle"
					id="menu_icon"
					variants={invert}
					initial={"from"}
					animate={[toggleNavView ? "opening" : "closing", "to"]}
					transition={{ ease: EASE, duration: DURATION }}
					whileHover={"hover"}
					whileTap={"tap"}
				>
					MENU
				</motion.i>
			</motion.button>
			<nav id="menu_nav">
				<div id="menu_nav_wrapper">
					<motion.ul
						variants={navList}
						animate={toggleNavView ? "opening" : "closing"}
						transition={{ ease: EASE, duration: DURATION }}
					>
						<li>
							<Link id="home" className="out" to="/">
								<motion.div
									variants={buttonBounce}
									whileHover={"hover"}
									whileTap={"tap"}
									onTap={goToAnotherPage}
								>
									Home
								</motion.div>
							</Link>
						</li>
					</motion.ul>
					<motion.ul
						variants={navList}
						animate={toggleNavView ? "opening" : "closing"}
						transition={{ ease: EASE, duration: DURATION, delay: (DURATION - DELAY) * 1 }}
						onTap={toggleAboutSubList}
					>
						<li>
							{/* <Link id="about" className="out" to="/about"> */}
							<motion.div
								id="list_opener"
								className="out"
								variants={buttonBounce}
								whileHover={"hover"}
								whileTap={"tap"}
							>
								About
							</motion.div>
							{/* </Link> */}
							<motion.div
								id="insideNavList"
								style={{ height: "0px" }}
								variants={insideNavList}
								animate={aboutSubList ? "open" : "close"}
								transition={{ ease: "easeInOut", duration: 0.5 }}
							>
								<Link id="frc_link" to="/frc">
									<motion.div
										variants={buttonBounce}
										whileHover={"hover"}
										whileTap={"tap"}
										onTap={goToAnotherPage}
									>
										FRC
									</motion.div>
								</Link>
								<Link id="outreach_link" to="/outreach">
									<motion.div
										variants={buttonBounce}
										whileHover={"hover"}
										whileTap={"tap"}
										onTap={goToAnotherPage}
									>
										Outreach
									</motion.div>
								</Link>
								<Link id="sponsors_link" to="/sponsors">
									<motion.div
										variants={buttonBounce}
										whileHover={"hover"}
										whileTap={"tap"}
										onTap={goToAnotherPage}
									>
										Sponsors
									</motion.div>
								</Link>
							</motion.div>
						</li>
					</motion.ul>
					{/* <motion.ul
						variants={navList}
						animate={toggleNavView ? "opening" : "closing"}
						transition={{ ease: EASE, duration: DURATION, delay: (DURATION - DELAY) * 2 }}
					>
						<li>
							<Link id="contact" className="out" to="/contact">
								<motion.div
									variants={buttonBounce}
									whileHover={"hover"}
									whileTap={"tap"}
									onTap={goToAnotherPage}
								>
									Contact
								</motion.div>
							</Link>
						</li>
					</motion.ul> */}
					<motion.ul
						variants={navList}
						animate={toggleNavView ? "opening" : "closing"}
						transition={{ ease: EASE, duration: DURATION, delay: (DURATION - DELAY) * 3 }}
					>
						<li>
							<Link id="code" className="out" to="/scoutCode">
								<motion.div variants={buttonBounce} whileHover={"hover"} whileTap={"tap"}>
									Scout Code
								</motion.div>
							</Link>
						</li>
					</motion.ul>
				</div>
			</nav>
			<motion.div
				id="logo_wrapper"
				variants={invert}
				initial={"from"}
				animate={[toggleNavView ? "opening" : "closing", "to"]}
				transition={{ ease: EASE, duration: DURATION }}
			>
				<img
					className="btnDeactive"
					id="logo"
					src="./assets/mineola_robo_no-white.png"
					alt="btnDeactive"
				/>
			</motion.div>
			<motion.div
				className="wrapper"
				id="wrapper"
				ref={wrapperFunction}
				// onScroll={() => {
				//     if (wrapperEle) {
				//         updateListItemAnimations(wrapperEle.scrollTop + (wrapperEle.getBoundingClientRect().height / 2));
				//     }
				// }}
				variants={wrapper}
				animate={toggleNavView ? "opening" : "closing"}
				transition={{ ease: EASE, duration: DURATION }}
			>
				<AnimatedRoutes />
			</motion.div>
		</>
	);
}

export default NavHub;
