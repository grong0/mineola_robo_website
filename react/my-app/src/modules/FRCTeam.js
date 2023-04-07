import React, { createRef, useEffect, useState } from "react";
import "../styles/FRCTeam.css";

import { motion } from "framer-motion";
import { Controller, Scene } from "react-scrollmagic";
import { wrapperEle } from "./NavHub";

// var listOfPeopleEle = [];

const EASE = "easeInOut";
const DURATION = 0.1;

// const THRESHOLD = 200;
// const MAGNITUDE = 1.3;

// var listItem = [];

// function pos(el) {
// 	listOfPeopleEle.push({
// 		y: el.getBoundingClientRect().y,
// 		height: el.getBoundingClientRect().height,
// 	});
// }

// var listItem = [];

// function howClose(scrollMid, el) {
//     if (el) {
//         var percentClosest = Math.abs(scrollMid - el["y"]) / THRESHOLD;
//         if (percentClosest <= 1) {
//             return 1 - Math.abs(scrollMid - el["y"]) / THRESHOLD;
//         }
//         return 0.0;
//     }

// }

// export function updateListItemAnimations(scrollMid) {
//     if (listItem) {
//         var newAnimations = listItem.copyWithin();
//         for (var i = 0; i < listItem.length; i++) {
//             listItem[i]['scale'] = 1.0 + (howClose(scrollMid, listOfPeopleEle[i]) * MAGNITUDE);
//         }
//     }
// }

// function thing() {
// 	console.log(listOfPeopleEle);
// }

var firstTime = true;

function FRCTeam() {
	// const [animations, setAnimations] = useState();
	// function updateAnimations(updatedAnimations) {
	// 	setAnimations(updatedAnimations);
	// }

	// Maybe change to mouse animations or something
	// useEffect(() => {
	// 	wrapperEle.addEventListener("scroll", () => {
	// 		if (listItem && wrapperEle) {
	// 			var newAnimations = listItem.copyWithin();
	// 			for (var i = 0; i < newAnimations.length; i++) {
	// 				newAnimations[i]["scale"] =
	// 					1.0 +
	// 					howClose(
	// 						wrapperEle.scrollTop + wrapperEle.getBoundingClientRect().height / 2,
	// 						listOfPeopleEle[i]
	// 					) *
	// 						MAGNITUDE;
	// 			}
	// 			updateAnimations(newAnimations);
	//             console.log(animations);
	// 		}
	// 	});
	// });

	return (
		<div className="content" id="theteam">
            <div className="titleElement">
                <div>The Team</div>
                <div></div>
            </div>
			<div id="whosOnTheTeam">
				<div id="mentors">
					<div id="mentor">
						<div id="mentor_picture">
							<img src="./assets/tempImg.jpg" />
						</div>
						<div className="subtitle" id="mentor_name">
							Andrew Woolsey
						</div>
					</div>
					<div id="mentor">
						<div id="mentor_picture">
							<img src="./assets/tempImg.jpg" />
						</div>
						<div className="subtitle" id="mentor_name">
							Kuri DiFede
						</div>
					</div>
					<div id="mentor">
						<div id="mentor_picture">
							<img src="./assets/tempImg.jpg" />
						</div>
						<div className="subtitle" id="mentor_name">
							Anthony Regueiferos
						</div>
					</div>
				</div>
				<div id="students">
					<div id="align_students">
						{/* ref={(el) => {
					    if (firstTime) {
					        console.log("gaming.")
					        var listEle = el;
					        for (var i = 1; i < listEle.childElementCount; i++) {
					            listItem.push({
					                scale: 1.0,
					            });
					        }
					        firstTime = false;
					    }
					}} */}
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={1}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Michael</span>
							<span>Driver</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={2}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Ishan</span>
							<span>Operator</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={3}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Eunice</span>
							<span>Coach</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={4}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Logan</span>
							<span>Technician</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={5}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Ricky</span>
							<span>Human Player</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={6}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Nick</span>
							<span>Coder</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={7}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Rahul</span>
							<span>Coder</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={8}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Julia</span>
							<span>Coder</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={9}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Cathreen</span>
							<span>Bully</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={10}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={11}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={12}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={13}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={14}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={15}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={16}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={17}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={18}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={19}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						<motion.div
							id="student"
							className="subtitle"
							// variants={animations}
							// animate={20}
							// transition={{ duration: DURATION }}
							// ref={pos}
						>
							<span>Lorem</span>
							<span>Ipsum</span>
						</motion.div>
						{/* <button onClick={thing}>Button</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FRCTeam;
