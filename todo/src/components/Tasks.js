import React from "react";

const Tasks = (props) => {
  return (
    <div className="tasks">
      {props.state.tasks.map((task) => {
        return (
          <div
            key={task.id}
            className={task.completed ? "task completed" : "task"}
            onClick={(e) => {
              e.preventDefault();
              console.log(task);
              props.toggleTask(task.id);
            }}
          >
            {task.item}
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
