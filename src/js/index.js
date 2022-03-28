//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.jsx";

let counter = 0;
setInterval(() => {
	const numOne = Math.floor(counter / 100000) % 10;
	const numTwo = Math.floor(counter / 10000) % 10;
	const numThree = Math.floor(counter / 1000) % 10;
	const numFour = Math.floor(counter / 100) % 10;
	const numFive = Math.floor(counter / 10) % 10;
	const numSix = Math.floor(counter / 1) % 10;

	counter++;
	ReactDOM.render(
		<SecondsCounter
			numberOne={numOne}
			numberTwo={numTwo}
			numberThree={numThree}
			numberFour={numFour}
			numberFive={numFive}
			numberSix={numSix}
		/>,
		document.querySelector("#app")
	);
}, 1000);
