let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
//  if true timer is running if flase timer is stop condition
let timer = false;


function start() {
    timer = true;
    stopwatch()
    // calling stopwatch function

}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("msec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";

}
function stopwatch() {
    msec = msec + 1;
    if (msec == 100) {
        sec = sec + 1;
        msec = 0;
    }
    if (sec == 60) {
        min = min + 1;
        sec = 0;
    }
    if (min == 60) {
        hr = hr + 1;
        min = 0;
    }

    // for making double digit
    let hrs = hr;
    let mins = min;
    let secs = sec;
    let msecs = msec;

    if (hr < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        mins = "0" + mins;
    }
    if (sec < 10) {
        secs = "0" + secs;
    }
    if (msec < 10) {
        msecs = "0" + msecs;
    }



    document.getElementById("hr").innerHTML = hrs;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;
    document.getElementById("msec").innerHTML = msecs;

    if (timer == true) {
        setTimeout('stopwatch()', 10)

    }

}