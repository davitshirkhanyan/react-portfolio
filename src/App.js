import About from "./components/About"
import Nav from "./components/Nav"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import React, { useState } from "react";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
        case "contact":
				return <Contact />;
        case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div>
				<Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
        
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
      <Resume />
				<Footer></Footer>

        <Contact></Contact>
			</div>
		</div>
	);
}

export default App;
