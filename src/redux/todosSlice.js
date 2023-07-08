import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;
