let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

// Stopwatch Functionality
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    displayCurrentTime();
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("displayTime").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function displayCurrentTime() {
    let displayTime = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
    document.getElementById("displayTime").innerText = displayTime;
}

// Lap Functionality
function lapTime() {
    if (isRunning) {
        let lap = document.createElement("li");
        lap.textContent = document.getElementById("displayTime").innerText;
        document.getElementById("laps").appendChild(lap);
    }
}

// Countdown Timer
let countdown;
function startCountdown() {
    let countdownTime = parseInt(document.getElementById("countdownInput").value);
    if (isNaN(countdownTime) || countdownTime <= 0) {
        alert("Enter a valid number of seconds.");
        return;
    }

    clearInterval(countdown);
    resetTimer();
    seconds = countdownTime;
    displayCurrentTime();

    countdown = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            displayCurrentTime();
        } else {
            clearInterval(countdown);
            alert("Countdown finished!");
        }
    }, 1000);
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
