# Day 7 - Array Cardio Day 2
### Objective
More array exercise!

### Notes
- `find()` returns the first element that you are looking for. `filter()` returns a subset of everything that you are looking for.
- `console.table()` will format your result into a table
- Two ways to delete an item based on its index: 1). `.splice()`; 2). Create a new array, then spread the subset of the array (use `.slice()` to get the subset of the array)
- `Array.prototype.some()` and `Array.prototype.every()` returns true or false 
- `findIndex()` returns the index of the element that is being searched

### Extra Challenge
- Find the difference between `find()` and `filter()`. I tried doing the exercise without watching the video, and I couldn't find the difference. After googling and trying out different combination, I found out that `find()` only returns the first element that you're looking for, while `filter()` returns every single thing that you're looking for. It's kinda like `querySelector` and `querySelectorAll`. I put all the tests in the `index-START.html`
