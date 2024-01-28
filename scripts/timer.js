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
    document.getElementById('squeaker').innerHTML = "Blocked"
}