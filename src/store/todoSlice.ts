import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
	id: string,
	title: string,
	completed: boolean,
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
			});
		},
		
		toggleComplete(state, action: PayloadAction<string>) {
			const toggleTodo = state.list.find(todo => todo.id === action.payload);
			console.log(toggleTodo);
			if (toggleTodo) {
				toggleTodo.completed = !toggleTodo.completed;
			}
		},
		
		removeTodo(state, action: PayloadAction<string>) {
			state.list = state.list.filter(todo => todo.id !== action.payload);
		},
		
		editTodo(state, action: PayloadAction<string>) {
			const currTodo = state.list.find(todo => todo.id === action.payload);
			if (currTodo) {
			    currTodo.title = 'ppp'
			}
			console.log(currTodo);
		},
		
		/*saveTodo(state, action: PayloadAction<string>) {
			state.list = state.list.slice().find();
		},*/
	},
});

export const {addTodo, toggleComplete, removeTodo, editTodo, /*saveTodo*/} = todoSlice.actions;

export default todoSlice.reducer;