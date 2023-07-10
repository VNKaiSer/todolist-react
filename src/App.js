import React, {useState} from 'react';
import './App.css';


function Task({ task }) {
  return (
    <div className='TaskName' style={{
      padding: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
      color: 'white',
      margin: 8,
      borderRadius: 8,
      border: '2px solid black',
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 20,
      fontWeight: 'bold',
      
    }}>
      {task}
    </div>
  );
}


function App() {
  const [tasks, addTask] = useState([])
  const [task, setTask] = useState('');
  console.log(tasks);
  function handleAddTask(){
    if(tasks.includes(task)){
      return
    }
    addTask(prev => [...prev, task]);
  }
  return (
    <div className="App" >
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task" 
      /> 
      <button 
        onClick={handleAddTask}
      >Add</button>
        {
          tasks.map((task , index ) => {
            return (
            <Task 
              key = {index}
              task = {task} 
            />
          )})
        }
      
    </div>
  );
}

export default App;
