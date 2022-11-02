import { editTodo, /*saveTodo,*/ Todo } from "../../store/todoSlice";
import React from "react";
import { Box, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useAppDispatch } from "../../hook";

interface EditTodoItemProps {
	todo: Todo,
	onChangeTodo: (title: { title: string }) => void,
}

const EditTodoItem: React.FC<EditTodoItemProps> = ({todo, onChangeTodo}) => {
	const dispatch = useAppDispatch();
	
	return (
		<Paper
			elevation={2}
			sx={{
				marginTop: '15px',
				width: '100%',
				padding: '20px 28px',
				borderRadius: 2,
				display: 'flex',
				justifyContent: 'space-between',
				alignContent: 'center',
				gap: 2,
				opacity: todo.completed ? 0.5 : 1,
			}}
		>
			<Box
				textAlign="left"
				display="flex"
				alignItems="center"
			>
				<Typography
					sx={{cursor: 'pointer', textDecorationLine: todo.completed ? 'line-through' : null}}
					variant="h5"
					component="h5"
					gutterBottom
					margin="0 20px"
				>
					<TextField
						value={todo.title}
						name="new todo"
						label="new todo"
						onChange={() => dispatch(editTodo(todo.id))}/>
				</Typography>
			</Box>
			<Stack direction="row" spacing={1}>
				<IconButton
					aria-label="edit"
					/*onClick={() => dispatch(saveTodo(todo.id, todo.title))}*/
				>
					<Edit/>
				</IconButton>
			</Stack>
		</Paper>
	);
};

export default EditTodoItem;