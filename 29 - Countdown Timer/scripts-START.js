// set a global variable to store setInterval
let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    // setInterval might not work in this case because it will stop when you leave the tab for too long or if you scroll away from the screen (in iOS)
    
    // figure out when the timer started
    const now = Date.now(); // returns a unix timestamp
    const then = now + seconds * 1000

    displayTimeLeft(seconds);
    displayEndTime(then);

    // display the amount of time left
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/ 1000);
        // check if the interval should stop
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
            // return only doesn't stop the interval, the function will keep running but won't return anything
        }
        displayTimeLeft(secondsLeft);
    }, 1000); 
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display; // update the tab name to the countdown
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
}


function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset()
})