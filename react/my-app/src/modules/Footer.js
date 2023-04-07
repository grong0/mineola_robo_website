import React, { useEffect } from "react";
import "../styles/Footer.css";

import { Link } from "react-router-dom";

function getCurrentYear() {
    const date = new Date();
    const year = date.getFullYear().toString();
    
    return year;
}

function Footer() {
    getCurrentYear();

	return (
		<div id="footer">
			<div id="nav-link">
				<ul>
					<li>
						<Link id="page-link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/outreach">
							Outreach
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/frc">
							FRC
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/contact">
							Contact
						</Link>
					</li>
					<li>
						<Link id="page-link" to="/scout">
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
