//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div>
				<i className="fas fa-stopwatch"></i>
			</div>
			<div className="cinco">{props.digitcinco % 10}</div>
			<div className="cuatro">{props.digitcuatro % 10}</div>
			<div className="tres">{props.digittres % 10}</div>
			<div className="dos">{props.digitdos % 10}</div>
			<div className="uno">{props.digituno % 10} </div>
		</div>
	);
}
SimpleCounter.prototype = {
	digitcinco: PropTypes.number,
	digitcuatro: PropTypes.number,
	digittres: PropTypes.number,
	digitdos: PropTypes.number,
	digituno: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const cinco = Math.floor(counter / 10000);
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	console.log(cinco, cuatro, tres, dos, uno);
	counter + 1;

	ReactDOM.render(
		<SimpleCounter
			digituno={uno}
			digitdos={dos}
			digittres={tres}
			digitcuatro={cuatro}
			digitcinco={cinco}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
