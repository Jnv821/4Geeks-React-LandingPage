import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



// Include custom components

import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import GroupOfCards from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container-fluid px-0">
			<NavBar/>
			<Jumbotron/>
			<GroupOfCards/>
			<Footer/>
		</div>
	);
};

export default Home;
