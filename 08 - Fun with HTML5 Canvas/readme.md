# Day 8 - HTML Canvas
### Objective
Create a page that you can draw on by clicking and moving your mouse. The resulting line should be rainbow-color, and the width of the stroke should oscillate

### Notes
- When you draw, you draw on a `context`, not directly on the HTML. There are several `contextType`, but in this exercise, we are using 2D context 
- `window.innerWidth` and `window.innerHeight` to get the exact width of the window
- Some `context` properties and method used in this exercise:
    - `ctx.lineCap`: to set/return the style of the end caps of a line
    - `ctx.lineJoin`: to set the type of corner created when the 2 lines meet
    - `ctx.lineWidth`: to set the width of the stroke
    - `ctx.beginPath()`: begin or reset the current path
    - `ctx.moveTo(lastX,lastY)`: moves the path to the specified point in the canvas, without creating a line
    - `ctx.lineTo(e.offsetX, e.offsetY)`: add a new point and creates a line to that point from the last specified point in the canvas
    - `ctx.stroke()`: actually draws the path
- How `draw()` function works:
    - Begin the path by calling `beginPath()` method on `context`. 
    - Move the pen using `moveTo()` method
    - Add the line from the starting point in `moveTo()` to the destination point in `lineTo()`
    - Draw the line using `stroke()`
    - Update the starting point to the destination point
    - In order for the starting point to be at wherever the mouse is currently, update the starting point to the current location of the mouse (`[lineX, lineY] = [e.offsetX, e.offset]`)

### Extra challenge
Idea: create an option where the user can change the color and the width