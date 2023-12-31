// import { Component } from 'react';
// import { nanoid } from 'nanoid';
import TodoList from 'components/TodoList';
import { Filter } from 'components/Filter/Filter';

import { Container, Header, SearchForm, Section } from 'components';

export const App = () => {
  // state = {
  //   todos: [],
  // };

  // componentDidMount() {
  //   const todos = JSON.parse(localStorage.getItem('todos'));

  //   if (todos) {
  //     this.setState(() => ({ todos }));
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   const { todos } = this.state;

  //   if (prevState.todos !== todos) {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }

  // addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [...todos, todo],
  //   }));
  // };

  // handleSubmit = data => {
  //   this.addTodo(data);
  // };

  // deleteTodo = id => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== id),
  //   }));
  // };

  // const { todos } = this.state;

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
