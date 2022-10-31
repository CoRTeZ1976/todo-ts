import React, { useState } from 'react';
import './App.css';
import { useAppDispatch } from "./hook";
import { addTodo } from "./store/todoSlice";
import NewTodoForm from "./components/form/NewTodoForm";

function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  
  const handleAction = () => {
    if (text.trim().length) {
        dispatch(addTodo(text))
      setText('');
    }
  }
  
  return (
      <div className='App'>
        <NewTodoForm
            value={text}
            updateText={setText}
            handleAction={handleAction}
        />
      </div>
  );
}

export default App;
