import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  initialState,
  reducer,
  Add_Task,
  Complete_Task,
  Clear_Task,
} from "./reducers/taskReducer";

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const newTask = (task) => {
    dispatch({type: Add_Task, payload: task})
  }

  const completeTask = (taskId) => {
    dispatch({type: Complete_Task, payload: taskId})
  }

  const clearTask = (e) => {
    e.preventDefault();
    dispatch({type: Clear_Task})
  }

  return (
    <div className="App">
      <ToDoForm newTask = {newTask} clearTask = {clearTask} />
      <ToDoList state ={state} completeTask = {completeTask}/>
    </div>
  );
}

export default App;
