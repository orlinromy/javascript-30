# Day 11 - Custom HTML5 Video Player
### Objectives
- You can toggle play and pause the video by clicking on the video or by clicking the play/pause button at the bottom left corner
- You can change the volume and playback rate by sliding the volume and playback rate bar
- You can skip back the video 10 seconds and forward 25 seconds by clicking on the skip button
- You can jump to any point of time in the video by clicking the progress bar or drag the progress bar to the left and right

### Notes
- Extra code: script.js to repeat the exercise
- Instead of using textContent, I'm using innerHTML property to put the pause icon (since I'm using `&#10074` to represent the pause instead of using the icon directly). More on textContent VS innerHTML: https://www.w3schools.com/jsref/prop_node_textcontent.asp#:~:text=The%20innerHTML%20property%20returns%20the,but%20without%20inner%20element%20tags.
- `parseFloat` is needed because `this.dataset.skip` is a string
- Two events that can be listened for video time update: `progress` and `timeupdate`
- You can also use this syntax: `video[method]()` with `method` being the name of the function in `string` data type to access the method of the object
- `e.offsetX` property defines which point in the x-axis the mouse is currently clicking.
- `<element>.offsetWidth` returns the layout width of an element.
- Video element has `play` and `pause` event listener.


### Extra Challenge
- Add a full screen button
- Add a time indicator under the progress bar