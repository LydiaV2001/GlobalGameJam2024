import { buildSqueaks } from "./squeakFactory.js";
import { buildObjectives } from "./writepad.js";
import { calculatePoints } from "./writepad.js";
import { timer } from "./timer.js";

buildSqueaks();
buildObjectives();
calculatePoints();
timer();