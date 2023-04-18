import React, { useEffect } from "react";
import "../styles/Footer.css";

import { Link } from "react-router-dom";
import { wrapperEle } from "./NavHub";

function getCurrentYear() {
    const date = new Date();
    const year = date.getFullYear().toString();
    
    return year;
}

function scrollUp() {
    if (wrapperEle) {
        wrapperEle.scrollTo(0, 0);
    }
}

function Footer() {
    getCurrentYear();

	return (
		<div id="footer">
			<div id="nav-link">
				<ul>
					<li>
						<Link id="page-link" to="/" onTouchEndCapture={scrollUp}>
							Home
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/outreach" onTouchEndCapture={scrollUp}>
							Outreach
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/frc" onTouchEndCapture={scrollUp}>
							FRC
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/contact" onTouchEndCapture={scrollUp}>
							Contact
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/scout" onTouchEndCapture={scrollUp}>
							Scout Code
						</Link>
					</li>
				</ul>
			</div>
			<div id="copywright">
				<div id="copywright-content">
                ©2022-<span ref={(el) => {
                    if (el) {
                        const date = new Date;
                        const year = date.getFullYear().toString();

                        el.innerHTML = year;
                    }
                }}></span>, mineolarobotics.com
                </div>
			</div>
		</div>
	);
}

export default Footer;
