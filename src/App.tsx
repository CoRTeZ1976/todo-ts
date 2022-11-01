import React, { useState } from 'react';
import './App.css';
import { useAppDispatch } from "./hook";
import { addTodo } from "./store/todoSlice";
import NewTodoForm from "./components/Form/NewTodoForm";
import TodoList from "./components/TodoList/TodoList";
import { Header } from "./components/Header/Header";
import { Box } from "@mui/material";

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
          <Box
              display='flex'
              flexDirection='column'
              width='50%'
          >
              <Header/>
              <NewTodoForm
                  value={text}
                  updateText={setText}
                  handleAction={handleAction}
              />
              <TodoList/>
          </Box>
      </div>
  );
}

export default App;
