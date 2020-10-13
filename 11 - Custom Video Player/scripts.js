// get all the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build the functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

// create a function which listens to whether the video is paused, then update the play/pause button 
function updateButton() {
    const icon = this.paused ? '►' : "&#10074&#10074;";
    toggle.innerHTML = icon;
    // more on textContent VS innerHTML: https://www.w3schools.com/jsref/prop_node_textcontent.asp#:~:text=The%20innerHTML%20property%20returns%20the,but%20without%20inner%20element%20tags.
}

function skip() {
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
    // parseFloat is needed because this.dataset.skip is a string
}

function handleChangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    // taking advantage of the flex-basis
    const percent = video.currentTime / video.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    // get the position of the click
    console.log(e); 
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


// event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate',handleProgress); //there's another event listener called 'progress'
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change',handleChangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleChangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousedown',() => {mousedown = true});
progress.addEventListener('mouseup', () => {mousedown = false});
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));