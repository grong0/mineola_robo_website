import React from "react";
import "../styles/App.css";

import { BrowserRouter as Router } from "react-router-dom";
import NavHub from "./NavHub";
import { createMemoryHistory } from "@remix-run/router";

function App() {
    const history = createMemoryHistory();

	return (
        <Router location={history.location}>
            <NavHub />
        </Router>
	);
}

export default App;
