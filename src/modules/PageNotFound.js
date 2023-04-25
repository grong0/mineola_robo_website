import React from "react";
import "../styles/PageNotFound.css";

function PageNotFound() {
	return (
		<div className="page" id="PageNotFound">
			<div className="content" id="PageNotFound-content">
				<div id="PageNotFound-container">
					<div id="PageNotFound-title">Page not found!</div>
					<div id="PageNotFound-subtitle">
						We couldn't find the page you were looking for! Try something else.
					</div>
				</div>
			</div>
		</div>
	);
}

export default PageNotFound;
