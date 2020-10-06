# Day 9 - Dev Tools
### Objective
Learn about dev tools (I'm using Chrome)

### Notes:
Several types of console function:
- `log()`: normal way to print something in the console
- `info()`: displays info (with info icon and blue background)
- `warn()`: displays warning (with exclamation mark in a triangle and yellow background)
- `error()`: displays error message (with exclamation mark in a circle and red background)
- `assert()`: to test some logic. If the first argument passed to this function evaluates to true, then do nothing. Otherwise, it will print out the error message (message in the second argument) to the console
- `count()`: count the occurence of the value passed to the function
- `time()` to start the timing function, `timeEnd()` to end the timer. The string passed to `time()` and `timeEnd()` has to be the same
- `group()` to group the text and end the group with `groupEnd()`. The string passed to these functions have to be the same. To collapse the group, use `groupCollapsed()`
- `clear()`: to clear the console screen
- You can replace the string in `console.log()` using `%s`, and add CSS styling by adding `%c`
- Put a debugging pointer by right clicking on the desired place for the pointer > Break on... > attribute modification.

### Extra challenge
I believe there are a lot more functions in dev tool, reading some books about this might help.