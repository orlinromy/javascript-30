// get the elements
/*
- You can toggle play and pause the video by clicking on the video or by clicking the play/pause button at the bottom left corner (done)
- You can change the volume and playback rate by sliding the volume and playback rate bar (done)
- You can skip back the video 10 seconds and forward 25 seconds by clicking on the skip button (done)
- You can jump to any point of time in the video by clicking the progress bar or drag the progress bar to the left and right
*/

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const toggle = player.querySelector('.toggle')
const ranges = player.querySelectorAll('.player__slider')
const skips = player.querySelectorAll('[data-skip]')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled');

// functions
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function changeButton() {
    const icon = video.paused ? '►' : "&#10074&#10074;";
    toggle.innerHTML = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function slide() {
    video[this.name] = this.value
}

function changeTime(e) {
    const videoTiming = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = videoTiming
}

function displayProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}




// event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', changeButton)
video.addEventListener('pause', changeButton)
video.addEventListener('timeupdate', displayProgress)
toggle.addEventListener('click', changeButton)
skips.forEach(skipSlide => skipSlide.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('mousemove', slide))

let mousedown = false;
progress.addEventListener('click', changeTime);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => {mousedown && changeTime(e)});