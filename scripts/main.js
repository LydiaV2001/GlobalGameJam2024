import { buildSqueaks } from "./squeakFactory.js";
import { buildObjectives, calculatePoints } from "./writepad.js";
import { timer } from "./timer.js";
//const audioElement = new Audio("../Assets/audio/Mickeyyyyyy.mp3");


function startGame() {
	//audioElement.play();
	//audioElement.loop(true);
	buildSqueaks();
	buildObjectives();
	timer();
}

startGame();

