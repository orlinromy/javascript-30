# Day 15 - Local Storage and Event Delegation 
### Objective 
Persist the data into local storage so that it's still showing the same thing when refreshed, and learn how to delegate event

### Notes 
- Event delegation --> assigning the handling of an common event of the children to their common parent. The example in this exercise is to assign the click event listener to the `<ul>` element instead of to individual `<li>` 
- `preventDefault()` method in an Event will prevent you to fall to default setting of an event, e.g. prevent the page from refreshing when a form is submitted
- `localStorage` allows user to save key/value pairs in a web browser
- `.reset()` method of a `form` element clears the form

### Extra challenge 
- Create a Check/Uncheck All or Delete All button (as mentioned in the video)