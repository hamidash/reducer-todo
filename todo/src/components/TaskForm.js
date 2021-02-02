import React, { useState } from "react";

const TaskForm = (props) => {
  const [formData, setFormData] = useState("");

  const changeHandler = (e) => {
    setFormData(e.target.value);
  };

  return (
    <div>
      <form action="">
        <br />
        <input
          type="text"
          value={formData}
          placeholder="enter task here"
          name="task"
          onChange={changeHandler}
        />{" "}
        <br /> <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.addTask(formData);
            setFormData("");
          }}
        >
          ADD
        </button>{" "}
        {"  "}
        <button
          onClick={(e) => {
            e.preventDefault();
            props.clearTask();
            setFormData("");
          }}
        >
          CLEAR
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
