import { useAppSelector } from "../../hook";
import TodoItem from "./TodoItem";
import React from "react";
import { Box } from "@mui/material";
import EditTodoItem from "./EditTodoItem";

const TodoList: React.FC = () => {
	const todos = useAppSelector(state => state.todos.list);
	
	return (
		<Box>
			{todos.map(todo => {
				if (todo.onEdit) {
					return (
						<EditTodoItem
							key={todo.id}
							{...todo}
						/>
					);
				}
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