import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import { useReducer, useState } from 'react'; 
import reducer, { initialState, ADD, TOGGLE, CLEAR } from './reducers/reducer';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (task) => {
    
    dispatch({type: ADD, payload: task}) 
  }

  const toggleTask = (taskId) => {
    dispatch({type: TOGGLE, payload: taskId})
  }

  const clearTask = () => {
   
    dispatch({type: CLEAR})
  }


  return (
    <div className="App">
      <TaskForm addTask = {addTask} clearTask={clearTask}/>
      <Tasks state = {state} toggleTask = {toggleTask}/>
    </div>
  );
}

export default App;
