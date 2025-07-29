### DOM - Document Object Models

#### Exercise 1

Create a simple task list app in HTML and JavaScript (no frameworks) where users can:
- Add new tasks via a form input
- See the list of tasks dynamically appear in the DOM
- Mark tasks as completed by clicking on them
- Remove completed tasks with a “Clear Completed” button

#### Requirements

**HTML Structure**: 

- A text input (`<input type="text">`)
- An “Add Task” button
- A `<ul>` or `<div>` to display the list of tasks
- A “Clear Completed” button

**Javascript Behaviour**

1. DOM selection
- Use document.querySelector() or getElementById() to grab elements

2. Event handling
- Add a click event to the Add button to:
    - Validate input (non-empty string)
    - Create a new list item (`<li>`) and append it to the list

3. Element creation and insertion
- Use document.createElement() to generate new DOM elements
    - Add a click event to each task item:
    - Toggle a "completed" class (CSS styling can show strikethrough or color change)

4. Class Management
- Use .classList.add(), .classList.toggle() and .classList.contains()

5. Clearing completed
- When "Clear Completed" is clicked: Iterate through the list and remove all items with the "completed" class

-------