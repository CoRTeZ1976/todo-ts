import React, { useState } from "react";
import { Box, IconButton, Paper, Stack, TextField } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { saveTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../hook";

interface EditTodoItemProps {
	id: string,
	title: string,
}

const EditTodoItem: React.FC<EditTodoItemProps> = ({id, title}) => {
	const dispatch = useAppDispatch();
	const [currTitle, updateTitle] = useState(title);
	
		const handleAction = () => {
		if (currTitle.trim().length) {
			dispatch(saveTodo({id: id, title: currTitle}));
		}
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
			}}
		>
			<Box
				textAlign="left"
				display="flex"
				alignItems="center"
			>
				<TextField
					value={currTitle}
					name="description"
					label="description"
					onChange={(e) => updateTitle(e.target.value)}
				/>
			</Box>
			<Stack direction="row" spacing={1}>
				<IconButton
					aria-label="edit"
					onClick={handleAction}
				>
					<Edit/>
				</IconButton>
			</Stack>
		</Paper>
	);
};

export default EditTodoItem;