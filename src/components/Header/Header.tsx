import React from 'react';
import { Typography } from "@mui/material";

export const Header = () => {
	return (
		<Typography
			variant='h1'
			component='h1'
			gutterBottom
			fontSize='40px'
		>
			TODOS
		</Typography>
	);
};