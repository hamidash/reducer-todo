import React from "react";

/* Task component to create a div for each task that it gets from Tasks data 
(this data comes from TodoList component as a prop which also gets it from APP.js)
    - Div has a dynmaic classname, which is either "task" if task.completed equals false or it is "task completed" if the task.completed equals true
    - Div has h3, which displays the name of the task from Task data (task.taskName) dynamically for each task object
    - Div has also onClick action, which it calls completeTask fcuntion with task id in the arguments. This function is passed from App to TodoList to Todo
     */

function Task(props) {
  return (
    <div
      onClick={() => props.completeTask(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <h3>{props.task.item}</h3>
    </div>
  );
}

export default Task;
