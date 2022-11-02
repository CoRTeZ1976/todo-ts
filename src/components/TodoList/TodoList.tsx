import { useAppSelector } from "../../hook";
import TodoItem from "./TodoItem";
import React from "react";
import { Box } from "@mui/material";



const TodoList: React.FC = () => {
	const todos = useAppSelector(state => state.todos.list);
	
	return (
		<Box>
			{todos.map(todo => {
				/*console.log(todo.id);
				if (todo.id === editTodoId) {
					return (
						<EditTodoItem
						key={todo.id}
						todo={todo}
						onChangeTodo={onChangeTodo}
					/>);
				}*/
				
				return (
					<TodoItem
						key={todo.id}
						{...todo}
					/>
				);
			})
			}
		</Box>
	);
};


export default TodoList;