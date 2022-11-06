import { useAppDispatch } from "../../hook";
import { editTodo, removeTodo, Todo, toggleComplete } from "../../store/todoSlice";
import React from "react";
import { Box, Checkbox, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface TodoItemProps {
	id: string,
	title: string,
	completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed}) => {
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
				opacity: completed ? 0.5 : 1,
			}}
		>
			<Box
				textAlign='left'
				display='flex'
				alignItems='center'
			>
				<Checkbox
					checked={completed}
					onChange={() => dispatch(toggleComplete(id))}
				/>
				<Typography
					sx={{cursor: 'pointer', textDecorationLine: completed ? 'line-through' : null}}
					variant='h5'
					component='h5'
					gutterBottom
					margin='0 20px'
				>
					{title}
				</Typography>
			</Box>
			<Stack direction='row' spacing={1}>
				<IconButton
					aria-label="edit"
					onClick={() => dispatch(editTodo(id))}
				>
					<Edit />
				</IconButton>
				<IconButton
					aria-label="delete"
					onClick={() => dispatch(removeTodo(id))}
				>
					<Delete />
				</IconButton>
			</Stack>
		</Paper>
	);
};

export default TodoItem;