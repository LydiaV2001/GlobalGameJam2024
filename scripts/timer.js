import { createSqueak } from "./squeakFactory.js";
import { calculatePoints } from "./writepad.js";

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
    var sec = 1;
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
    let points = calculatePoints();

    let court_image = document.createElement('img');
    court_image.src = "./images/corut.png";
    court_image.style.width = "100%"

    document.getElementById('notepad_grab_bar').innerHTML = "Court.exe";
    document.getElementById('notepad').appendChild(court_image)

    
    let headline = document.createElement('h1')
    let button = document.createElement('button')

    if (points <= 0) {
        headline.textContent = "The Mouse Got Away With It!"
    } else if (points <= 4) {
        headline.textContent = "Mickey Mouse Apologizes for Controversial Squeaks!"
    } else {
        headline.textContent = "Mickey Mouse Dropped From Disney Following Controversial Squeaks!"
    }

    let scoreBoard = document.createElement('p')
    scoreBoard.textContent = "You scored " + points + " points!";
    button.onclick = function() {
        location.reload();
      };
    button.textContent = "Start Again?";
    document.getElementById('notepad').appendChild(headline);
    document.getElementById('notepad').appendChild(scoreBoard);
    document.getElementById('notepad').appendChild(button);


    headline.scrollIntoView();

}