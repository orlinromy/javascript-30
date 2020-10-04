# Day 6 - Type Ahead
### Objective
Show all cities or states that matches the string provided by user in the search bar, and highlight all matching string

### Notes
- use `fetch(...).then(...)` to get the data from an API. `fetch()` returns a Promise.\
- `fetch(dataUrl).then(blob => console.log(blob))` --> here, the data type of blob is unknown, so we need to set the data type for it. `blob` has `.json()` method to convert the data type to JSON
- `String.match()` takes in a regex expression to match String to a pattern. Since we can't directly pass the variable into `.match()` (otherwise, it will match the name of the variable instead of the value in the variable), we need to create a new RegExp instance (`const regex = new RegExp()`) and pass this to `.match()`
- `change` event listener will only be fired after the element alteration is committed by user. To make the script accounts for the change immediately, add `keyup` event listener
- "The innerHTML property sets or returns the HTML content (inner HTML) of an element" - from (W3School)[https://www.w3schools.com/jsref/prop_html_innerhtml.asp]

### Extra Challenge
🙅‍♀️