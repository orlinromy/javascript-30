# Day 16 - Mouse Move Shadow
### Objective
Create a moving shadow on mouse move event

### Notes
- When using mouse move, if the mouse is hovered on a child element, the offset location will start from 0 again
- `this` in `shadow()` function is always the `hero` class, but the `e.target` changes depending on which element triggers it. When the mouse is hovered over the text, `e.target` changes from the `hero` class to the text element inside `hero`


### Extra challenge
Nopes.