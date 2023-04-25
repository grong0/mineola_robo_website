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
		<div className="content">
			<div className="titleElement">
				<div>Our Mentors</div>
				<div></div>
			</div>
			<div id="our-mentors">
				<div className="mentorContainer">
					<div className="mentorImg">
						<img src="./assets/mentors/Andrew Woolsey.jpg" alt="Andrew Woolsey" />
                        <img src="./assets/tempImg.jpg" alt="Andrew Woolsey" />
					</div>
					<div className="mentorName">Andrew Woolsey</div>
				</div>
				<div className="mentorContainer">
					<div className="mentorImg">
						<img src="./assets/mentors/Kuri DiFede.jpg" alt="Kuri DiFede" />
                        <img src="./assets/tempImg.jpg" alt="Kuri DiFede" />
					</div>
					<div className="mentorName">Kuri DiFede</div>
				</div>
				<div className="mentorContainer">
					<div className="mentorImg">
						<img src="./assets/mentors/Anthony Regueiferos.jpg" alt="Anthony Regueiferos" />
                        <img src="./assets/tempImg.jpg" alt="Anthony Regueiferos" />
					</div>
					<div className="mentorName">Anthony Regueiferos</div>
				</div>
			</div>
		</div>
	);
}

export default FRCTeam;
