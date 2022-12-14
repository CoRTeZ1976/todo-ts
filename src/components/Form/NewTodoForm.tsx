import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

interface NewTodoForm {
	value: string,
	updateText: (str: string) => void,
	handleAction: () => void,
}

const NewTodoForm: React.FC<NewTodoForm> = ({value, updateText, handleAction}) => {
	return (
		<Paper
			elevation={2}
			sx={{
				width: 'auto',
				maxWidth: '100%',
				padding: '25px 30px',
				borderRadius: 2,
				display: 'flex',
				justifyContent: 'space-between',
				alignContent: 'center',
				alignItems: 'center',
				gap: 2,
			}}
		>
			<TextField
				placeholder={'description'}
				value={value}
				onChange={(e) => updateText(e.target.value)}
				name='new todo'
				label='new todo'
				multiline
				maxRows={5}
				sx={{width: '100%'}}
			/>
			<Button
				startIcon={<Add/>}
				onClick={handleAction}
				variant="outlined"
				size='large'
			>Add</Button>
		</Paper>
	);
};

export default NewTodoForm;