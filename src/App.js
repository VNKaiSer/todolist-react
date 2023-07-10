import React, {useState} from 'react';
import './App.css';


function Task({ task }) {
  return (
    <div className='TaskName' style={{
      padding: 5,
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
      position: 'relative',
      
    }}>
      {task}

      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: 8,
          border: '2px solid black',
          padding: 5,
          margin: 8,
          fontSize: 15,
          position: 'absolute',
          top: -3.8,
          right: 60,
        }}  
      > Delete </button>
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
          borderRadius: 8,
          border: '2px solid black',
          padding: 5,
          margin: 8,
          fontSize: 15,
          position: 'absolute',
          top: -3.8,
          right: -3,

          
        }}
      > Done </button>
    </div>
  );
}


function App() {
  
  const [tasks, addTask] = useState(() =>{
    const data = JSON.parse(localStorage.getItem('tasks'))
    return data ? data : []
  })
  const [task, setTask] = useState('');
  console.log(tasks);
  function handleAddTask(){
    if(task === ''){
      return
    }
    if(tasks.includes(task)){
      return
    }
    addTask(prev => [...prev, task]);
    const jsonJob = JSON.stringify(tasks);
    localStorage.setItem('tasks', jsonJob);
  }
  return (
    <div className="App" >
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task" 
        style={{ 
          padding: 5,
          margin: 8,
          borderRadius: 8,
          border: '2px solid black',
          fontSize: 20,
          
         }}
      /> 
      <button 
        onClick={handleAddTask}
        style={{ 
          padding: 5,
          margin: 8,
          borderRadius: 8,
          border: '1px solid black',
          fontSize: 20,
        
         }}
      >Add Task</button>
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
