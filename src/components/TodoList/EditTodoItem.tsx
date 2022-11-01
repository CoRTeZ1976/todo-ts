import { useAppDispatch } from "../../hook";
import { toggleComplete, editTodo as onEditTodo} from "../../store/todoSlice";
import React, { FormEvent, useState } from "react";
import { Box, Checkbox, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

interface EditTodoItemProps {
	id: string,
	title: string,
	completed: boolean,
}

const EditTodoItem: React.FC<EditTodoItemProps> = ({ id, title, completed}) => {
	const dispatch = useAppDispatch();
	const [editTodo, setEditTodo] = useState(id)
	
	const onTextFieldChangeCapture = (event: FormEvent<HTMLDivElement>) => {
		const {value, name} = event.target;
		
	};
	
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
					<TextField
						value={title}
						name='new todo'
						label='new todo'
						onChange={() => onEditTodo(id)}/>
				</Typography>
			</Box>
			<Stack direction='row' spacing={1}>
				<IconButton
					aria-label="edit"
					onClick={() => dispatch(onEditTodo(id))}
				>
					<Edit />
				</IconButton>
			</Stack>
		</Paper>
	);
};

export default EditTodoItem;