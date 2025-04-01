import React, { useState }from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['Buy groceries', 'Do laundry']);

  return (
    <>
      <h1>My TODO Lists</h1>
      <ul>
        {todos.map( (todo,index) => (
          <li key={index}>{ todo }</li>
        ))}
      </ul>
    </>
  );
}

export default App;
