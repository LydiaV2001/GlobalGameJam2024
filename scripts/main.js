import { buildSqueaks } from "./squeakFactory.js";
import { buildObjectives, calculatePoints } from "./writepad.js";
import { timer } from "./timer.js";

buildSqueaks();
buildObjectives();
timer();
calculatePoints();