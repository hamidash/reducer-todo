import React, { useReducer, useState } from "react";



const ToDoForm = (props) => {
  const [formData, setFormData] = useState("");
  

  const changeHandler = (e) => {
    setFormData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.newTask(formData);
    setFormData("");
  }

  return (
    <form action="">
      <label htmlFor="taskName">
        <input
          type="text"
          name="taskName"
          value={formData}
          onChange={changeHandler}
          placeholder="Add task here"
        />
      </label>
      <button onClick = {submitHandler}
        className="button"
      >
        Submit
      </button>
      <button className="btn-clear" onClick = {props.clearTask}>Clear</button>
    </form>
  );
};

export default ToDoForm;
