import { buildSqueaks } from "./squeakFactory.js";
import { buildObjectives, calculatePoints } from "./writepad.js";
import { timer } from "./timer.js";

buildSqueaks();
buildObjectives();
timer();
//calculatePoints();

const audioElement = new Audio("../Assets/audio/Mickeyyyyyy.mp3");
audioElement.play();
audioElement.loop(true);