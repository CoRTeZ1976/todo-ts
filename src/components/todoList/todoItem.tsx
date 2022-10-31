import { useAppDispatch } from "../hook";
import { removeTodo } from "../store/todoSlice";
import React from "react";

interface TodoItemProps {
	id: string,
	title: string,
	completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed}) => {
	const dispatch = useAppDispatch();
	
	return (
		<li>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(toggleComplete(id))}
			/>
			<span>{title}</span>
			<span onClick={() => dispatch(removeTodo(id))}>&times;</span>
		</li>
	);
};

export default TodoItem;