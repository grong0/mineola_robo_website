import React, { useEffect, useState } from "react";
import "../styles/WelcomePage.css";
import { motion } from "framer-motion";

const welcomeTransition = {
	from: {
		height: "100vh",
		width: "100vw",
		marginTop: "0px",
		borderRadius: "0px",
	},
	to: {
		height: "calc(100vh - 69px - 1.5vw)",
		width: "97vw",
		marginTop: "69px",
		borderRadius: "14px",
		transition: {
			duration: 2,
			delay: 2,
			ease: "easeInOut",
		},
	},
};

var imageElements = [];
function getElements(el) {
	imageElements.push(el);
}

function WelcomePage() {
	const [currentImg, setCurrentImg] = useState();
	function updateCurrentImg(img) {
		setCurrentImg(img);
	}

    var containerEle;

	useEffect(() => {
		var img1 = imageElements[1 - 1];
		var img2 = imageElements[2 - 1];
		var img3 = imageElements[3 - 1];
		var img4 = imageElements[4 - 1];
		var img5 = imageElements[5 - 1];
		var img6 = imageElements[6 - 1];
		var img7 = imageElements[7 - 1];
		// var currentImg = 1;
		var newStart = true;

		function sleep(duration) {
			return new Promise((resolver) => setTimeout(resolver, duration * 1000));
		}

		async function newCycle(seconds) {
			while (true) {
				await sleep(seconds);
				for (let i = 1; i <= 7; i++) {
					console.log("currentImg is " + String(i - 1) + ". Now fading to " + String(i));

					await sleep(seconds);
				}
			}
		}

		async function cycle(seconds) {
			while (true) {
				// console.log("starting again");
				for (let x = 1; x <= 7; x++) {
					// console.log("started for loop");
					if (x == 1) {
						if (newStart) {
							newStart = false;
							// console.log('newStart was true');
							continue;
						} else {
							// console.log('newStart was false');
							img7.classList.add("fadingout");
							img1.classList.add("fadingin");
							sleep(3).then(() => {
								img7.style.opacity = 0;
								img7.classList.remove("fadingout");
								img1.style.opacity = 100;
								img1.classList.remove("fadingin");
							});
						}
					} else if (x == 2) {
						img1.classList.add("fadingout");
						img2.classList.add("fadingin");
						sleep(3).then(() => {
							img1.style.opacity = 0;
							img1.classList.remove("fadingout");
							img2.style.opacity = 100;
							img2.classList.remove("fadingin");
						});
					} else if (x == 3) {
						img2.classList.add("fadingout");
						img3.classList.add("fadingin");
						sleep(3).then(() => {
							img2.style.opacity = 0;
							img2.classList.remove("fadingout");
							img3.style.opacity = 100;
							img3.classList.remove("fadingin");
						});
					} else if (x == 4) {
						img3.classList.add("fadingout");
						img4.classList.add("fadingin");
						sleep(3).then(() => {
							img3.style.opacity = 0;
							img3.classList.remove("fadingout");
							img4.style.opacity = 100;
							img4.classList.remove("fadingin");
						});
					} else if (x == 5) {
						img4.classList.add("fadingout");
						img5.classList.add("fadingin");
						sleep(3).then(() => {
							img4.style.opacity = 0;
							img4.classList.remove("fadingout");
							img5.style.opacity = 100;
							img5.classList.remove("fadingin");
						});
					} else if (x == 6) {
						img5.classList.add("fadingout");
						img6.classList.add("fadingin");
						sleep(3).then(() => {
							img5.style.opacity = 0;
							img5.classList.remove("fadingout");
							img6.style.opacity = 100;
							img6.classList.remove("fadingin");
						});
					} else if (x == 7) {
						img6.classList.add("fadingout");
						img7.classList.add("fadingin");
						sleep(3).then(() => {
							img6.style.opacity = 0;
							img6.classList.remove("fadingout");
							img7.style.opacity = 100;
							img7.classList.remove("fadingin");
						});
					}
					await sleep(seconds);
				}
			}
		}

		function updateImageSizing(imageElements, containerEle) {
			imageElements.forEach((el) => {
				if (
					containerEle.clientWidth / containerEle.clientHeight <
					el.clientWidth / el.clientHeight
				) {
					el.style.width = "auto";
					el.style.height = "100%";
				} else {
					el.style.width = "100%";
					el.style.height = "auto";
				}
			});
		}

        

		updateImageSizing(imageElements, containerEle);
		window.addEventListener("resize", () => {
			updateImageSizing(imageElements, containerEle);
		});

		sleep(8).then(() => {
			// console.log("5 seconds are up, starting loop.")
			cycle(8);
		});
	}, []);

	return (
		<div id="welcome_wrapper">
			<motion.div id="welcome" variants={welcomeTransition} initial={"from"} animate={"to"}>
				<div id="welcome_imgs">
					<img id="img1" ref={getElements} src="/assets/welcome_imgs/img1.png" alt="img1" />
					<img id="img2" ref={getElements} src="/assets/welcome_imgs/img2.png" alt="img2" />
					<img id="img3" ref={getElements} src="/assets/welcome_imgs/img3.png" alt="img3" />
					<img id="img4" ref={getElements} src="/assets/welcome_imgs/img4.png" alt="img4" />
					<img id="img5" ref={getElements} src="/assets/welcome_imgs/img5.png" alt="img5" />
					<img id="img6" ref={getElements} src="/assets/welcome_imgs/img6.png" alt="img6" />
					<img id="img7" ref={getElements} src="/assets/welcome_imgs/img7.png" alt="img7" />
				</div>
				<div
					className="centered"
					ref={(el) => {
						containerEle = el;
					}}
				>
					<div id="mineola_container">
						<h1 id="mineola">MINEOLA</h1>
					</div>
					<div className="border"></div>
					<div id="robotics_container">
						<h1 id="robotics">ROBOTICS</h1>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default WelcomePage;
