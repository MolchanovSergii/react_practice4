import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            likes: 0,
          },
        };
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    incrementLike(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            likes: todo.likes + 1,
          };
        }
        return todo;
      });
    },
    decrementLike(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          if (todo.likes - 1 < 0) {
            return todo;
          }
          return {
            ...todo,
            likes: todo.likes - 1,
          };
        }
        return todo;
      });
    },
    editToto(state, { payload: { id, text } }) {
      state.todos = state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            text,
          };
        }
        return todo;
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo, incrementLike, decrementLike, editToto } =
  todosSlice.actions;
