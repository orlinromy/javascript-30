# Day 2 - JS and CSS Clock
### Objective
Create an analog clock using JavaScript and CSS

### Notes
- transform: use `transform-origin` to determine the point of pivot/position of transformed element
- transition: use `transition-timing-function` to specify the speed of the transition over its duration. It can be configured using `cubic-bezier` function.
- `Object.style` is used to access the style of an Object

### Extra Challenge (or rather additional styling)
- Due to `transition` property in the `.hand` style, there's a weird motion on the minutes hand that it goes back to it's original position (pointing to 9) before pointing to the correct minute. This is fixed by removing the transition when `seconds = 0` and adding it back when `seconds = 1` as recommended in the video. Other possible fix that is mentioned in the video is to tally the amount of rotation degree.
- Differentiate the hour, minute, and second hands
