import React, { useState } from "react";
import "../styles/FRCRobots.css";

import { motion } from "framer-motion";

const EASE = "easeInOut";
const DURATION = 0.2;

const robot = {
	opening: {
		width: "100%",
		transform: "translate3d(0deg, 180deg, 0deg)",
		translate3d: "(0deg, 180deg, 0deg)",
	},
	closing: {
		width: "0%",
		transform: "translate3d(0deg, 0deg, 0deg)",
		translate3d: "(0deg, 0deg, 0deg)",
	},
	idle: {
		width: "100%",
		transform: "translate3d(0deg, 0deg, 0deg)",
		translate3d: "(0deg, 0deg, 0deg)",
	},
};

const robot_title = {
	hover: {
		scale: 1.1,
	},
};
const robot_backgroundImage = {
	hover: {
		height: "120%",
	},
};

function FRCRobots() {
	const [toggleRobot, setRobot] = useState("none");
	function toggleRobot1() {
		setRobot(toggleRobot === "none" ? "robot1" : "none");
	}
	function toggleRobot2() {
		setRobot(toggleRobot === "none" ? "robot2" : "none");
	}
	function toggleRobot3() {
		setRobot(toggleRobot === "none" ? "robot3" : "none");
	}

	return (
		<div className="content" id="frcContent">
            <div className="titleElement">
                <div>6806</div>
                <div>Wild Reds</div>
            </div>

			<p className="description">
				&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vel amet ea ipsum
				odio veniam quaerat numquam iure, dolorum suscipit et iusto porro facilis corporis repellat
				ducimus fuga hic? Eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Inventore minus, similique alias quis accusamus neque architecto deserunt quam esse quae hic
				voluptates iusto accusantium vel mollitia sunt expedita. Asperiores, maxime!
			</p>

			<h2 className="subtitle">Robots over the years</h2>

			<motion.div
				id="frcContent_robotContainer"
				animate={
					toggleRobot === "robot1"
						? { color: "red" }
						: toggleRobot === "robot2"
						? { color: "rgb(0, 255, 0)" }
						: toggleRobot === "robot3"
						? { color: "rgb(0, 0, 255)" }
						: { color: "rgb(255, 255, 0)" }
				}
				transition={{ ease: EASE, duration: DURATION }}
			>
				<motion.div
					id="robot"
					onClick={toggleRobot1}
					variants={robot}
					animate={
						toggleRobot !== "robot1" && toggleRobot !== "none"
							? "closing"
							: toggleRobot === "robot1"
							? "opening"
							: "idle"
					}
					transition={{ ease: EASE, duration: DURATION }}
					whileHover={"hover"}
				>
					<div id="frontFace">
						<motion.div
							id="frontFace_title"
							className="subtitle"
							variants={robot_title}
							transition={{ ease: EASE, duration: DURATION }}
						>
							Robot1
						</motion.div>
						<motion.img
							id="frontFace_backgroundImage"
							src="/assets/tempImg.jpg"
							alt="backgroundImg robot1"
							variants={robot_backgroundImage}
							transition={{ ease: EASE, duration: DURATION }}
						/>
					</div>
					<div id="backFace"></div>
				</motion.div>
				<motion.div
					id="robot"
					onClick={toggleRobot2}
					variants={robot}
					animate={
						toggleRobot !== "robot2" && toggleRobot !== "none"
							? "closing"
							: toggleRobot === "robot2"
							? "opening"
							: "idle"
					}
					transition={{ ease: EASE, duration: DURATION }}
					whileHover={"hover"}
				>
					<div id="frontFace">
						<motion.div
							id="frontFace_title"
							className="subtitle"
							variants={robot_title}
							transition={{ ease: EASE, duration: DURATION }}
						>
							Robot2
						</motion.div>
						<motion.img
							id="frontFace_backgroundImage"
							src="/assets/tempImg.jpg"
							alt="backgroundImg robot2"
							variants={robot_backgroundImage}
							transition={{ ease: EASE, duration: DURATION }}
						/>
					</div>
					<div id="backFace"></div>
				</motion.div>
				<motion.div
					id="robot"
					onClick={toggleRobot3}
					variants={robot}
					animate={
						toggleRobot !== "robot3" && toggleRobot !== "none"
							? "closing"
							: toggleRobot === "robot3"
							? "opening"
							: "idle"
					}
					transition={{ ease: EASE, duration: DURATION }}
					whileHover={"hover"}
				>
					<div id="frontFace">
						<motion.div
							id="frontFace_title"
							className="subtitle"
							variants={robot_title}
							transition={{ ease: EASE, duration: DURATION }}
						>
							Robot3
						</motion.div>
						<motion.img
							id="frontFace_backgroundImage"
							src="/assets/tempImg.jpg"
							alt="backgroundImg robot3"
							variants={robot_backgroundImage}
							transition={{ ease: EASE, duration: DURATION }}
						/>
					</div>
					<div id="backFace"></div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default FRCRobots;
