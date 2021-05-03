import About from "./components/About"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Resume from "./components/Resume"
import React, { useState } from "react";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div>
				<Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
        <Resume />
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
