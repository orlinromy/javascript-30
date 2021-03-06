# Day 22 - Follow Along Link Highlighter 
### Objective
Create a sliding highlighter for all the links when hovered

### Notes 
- To fix the highlight that is off when scrolling, use `window.scrollX` and `window.scrollY` to get how many pixel the screen is scrolled and adjust accordingly 
- `mouseover` and `mouseenter` difference: `mouseenter` does not react to event bubbling, meaning that if there is no even handler for that element, it won't pass (or bubble) the event to the parent (source: https://stackoverflow.com/questions/1104344/what-is-the-difference-between-the-mouseover-and-mouseenter-events#:~:text=In%20short%2C%20you'll%20notice,this%20element%20to%20this%20element.&text=This%20can%20trigger%20our%20bound%20mouseover%20handler%20at%20inopportune%20times.)
- `getBoundingClientRect()` returns the information about the size of an element and its position relative to the viewport (source: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

### Extra challenge
Create a sliding drop down menu as shown in the beginning of the video
