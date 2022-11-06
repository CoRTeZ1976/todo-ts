import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
	id: string,
	title: string,
	completed: boolean,
	onEdit: boolean,
};

type TodosState = {
	list: Todo[],
};

const initialState: TodosState = {
	list: [],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: new Date().toISOString(),
				title: action.payload,
				completed: false,
				onEdit: false,
			});
		},
		
		toggleComplete(state, action: PayloadAction<string>) {
			const toggleTodo = state.list.find(todo => todo.id === action.payload);
			if (toggleTodo) {
				toggleTodo.completed = !toggleTodo.completed;
			}
		},
		
		removeTodo(state, action: PayloadAction<string>) {
			state.list = state.list.filter(todo => todo.id !== action.payload);
		},
		
		editTodo(state, action: PayloadAction<string>) {
			const editCurrTodo = state.list.find(todo => todo.id === action.payload);
			if (editCurrTodo) {
				editCurrTodo.onEdit = !editCurrTodo.onEdit;
			}
		},
		
		saveTodo(state, action: PayloadAction<{id: string, title: string}>) {
			const editCurrTodo = state.list.find(todo => todo.id === action.payload.id)
			if (editCurrTodo) {
			    editCurrTodo.onEdit = false;
				editCurrTodo.title = action.payload.title;
			}
		},
	},
});

export const {addTodo, toggleComplete, removeTodo, editTodo, saveTodo} = todoSlice.actions;

export default todoSlice.reducer;