// TIMER
const startDate = new Date("2024-03-09");

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const timerDiv = document.getElementById("timer");
    if (!timerDiv) return;

    timerDiv.innerHTML =
        days + " days " +
        (hours % 24) + " hours " +
        (minutes % 60) + " minutes ❤️ " +
        (seconds % 60) + " seconds";
}

updateTimer();
setInterval(updateTimer, 1000);