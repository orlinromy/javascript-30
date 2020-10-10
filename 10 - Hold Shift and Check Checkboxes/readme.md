# Day 10 - Hold Shift to Check Multiple Boxes
### Objective
As the title suggest, check multiple checkboxes as you hold Shift key

### Notes
I did this exercise by watching the tutorial while doing it, then delete the code and start over. I struggled at the `handleCheck` function, which involves a lot of `this` and updating a lot of variables. Lots of things happen in that function at the same time. Anyways, this is one of the challenges that I will redo in the future, and here are some technical notes:
- In `click` event, there's `shiftKey` property that you can use to check if the user presses Shift key
- `click` event will also fire when you use your keyboard
- The first item that is clicked need to be stored in a variable, since we need to loop through from the first item until the last item that is clicked
- How `handleCheck` function works:
    - Record the first checkbox that is checked
    - Check if the shift key is pressed and if the checkbox is checked (not unchecked). If both conditions are true:
        - Loop through the checkboxes
        - If the checkbox is between the first and the last item that is clicked, update the `checked` property


### Extra Challenge
🤷‍♀️ I still need to digest this