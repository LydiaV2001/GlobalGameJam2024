import { createSqueak } from "./squeakFactory.js";

const endSqueak = {
        author: "Mickey Mouse",
        tag: "@MickeyMouseOfficial",
        date: "Today",
        pfp: "./images/mickey.jpg",
        category: "tame",
        body: "Blocked. Smh.",
        image: "",
        likes: "0",
        resqueaks: "0",
        replies: "0"
    }

export function timer() {
    var sec = 1000;
    var timer = setInterval(function () {
        let min = Math.floor(sec/60)
        if (sec%60 < 10) {
            document.getElementById('timer').innerHTML = min + ":0" + sec%60;
        } else {
            document.getElementById('timer').innerHTML = min + ":" + sec%60;
        }
        sec--;
        console.log(sec);
        if (sec < 0) {
             clearInterval(timer);
             endEvidenceStage();
        }
    }, 1000);
}

function endEvidenceStage() {
    document.getElementById('squeaker').innerHTML = "";
    createSqueak(endSqueak, 1000)
}