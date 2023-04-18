import React, { useState } from "react";
import "../styles/OutReachEvents.css";

import { motion } from "framer-motion";

const EASE = "";
const TYPE = "spring";
const DURATION = 0.5;

const eventMotion = {
	openLeft: {
		left: "50%",
		translateX: "-50%",
		width: "75%",
	},
	openRight: {
		right: "50%",
		translateX: "50%",
		width: "75%",
	},
	closeLeft: {
		left: 0,
		translateX: "0%",
		// "z-index": 1
	},
	closeRight: {
		right: 0,
		translateX: "0%",
		// "z-index": 1
	},

	eventsOpen: {
		opacity: 0.5,
	},
	eventsClose: {
		opacity: 1,
	},
};

var eventEles = [];

function OutReachEvents() {
	const [eventToggled, setEventToggled] = useState(0);
	function updateEventToggled(eventNum) {
		if (eventToggled == eventNum) {
			setEventToggled(0);
			if (eventEles) {
				eventEles[eventNum - 1].classList.toggle("selected");
				// sleep(DURATION)
				eventEles[eventNum - 1].classList.toggle("unselected");
			}
		} else if (eventToggled == 0) {
			setEventToggled(eventNum);
			if (eventEles) {
				eventEles[eventNum - 1].classList.toggle("selected");
				// sleep(DURATION)
				eventEles[eventNum - 1].classList.toggle("unselected");
			}
		}
	}

	return (
		<div className="content" id="outreachEvents">
			<div className="titleElement">
				<div>Outreach</div>
				<div></div>
			</div>
			<p className="description">
				&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vel amet ea ipsum
				odio veniam quaerat numquam iure, dolorum suscipit et iusto porro facilis corporis repellat
				ducimus fuga hic? Eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Inventore minus, similique alias quis accusamus neque architecto deserunt quam esse quae hic
				voluptates iusto accusantium vel mollitia sunt expedita. Asperiores, maxime!
			</p>

			<motion.div id="outreach_events" variants={eventMotion}>
				<div id="outreach_events_leftside">
					<div id="event" className="unselected">
						<img src="./assets/tempImg.jpg" />
						<div className="subtitle">Event</div>
						<div id="event_date" className="subtitle">
							xx/xx/xx
						</div>
					</div>
					<div id="event" className="unselected">
						<img src="./assets/tempImg.jpg" />
						<div className="subtitle">Event</div>
						<div id="event_date" className="subtitle">
							xx/xx/xx
						</div>
					</div>
					<div id="event" className="unselected">
						<img src="./assets/tempImg.jpg" />
						<div className="subtitle">Event</div>
						<div id="event_date" className="subtitle">
							xx/xx/xx
						</div>
					</div>
				</div>
				<div id="outreach_events_rightside">
					<div id="event" className="unselected">
						<img src="./assets/tempImg.jpg" />
						<div className="subtitle">Event</div>
						<div id="event_date" className="subtitle">
							xx/xx/xx
						</div>
					</div>
					<div id="event" className="unselected">
						<img src="./assets/tempImg.jpg" />
						<div className="subtitle">Event</div>
						<div id="event_date" className="subtitle">
							xx/xx/xx
						</div>
					</div>
					<div id="event" className="unselected">
						<img src="./assets/tempImg.jpg" />
						<div className="subtitle">Event</div>
						<div id="event_date" className="subtitle">
							xx/xx/xx
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default OutReachEvents;
