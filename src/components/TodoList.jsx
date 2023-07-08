import { Grid } from './Grid/Grid.styled';
import { GridItem } from './Grid/Grid.styled';
import { Todo } from './Todo/Todo';
import { Text } from './Text/Text.styled';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
                // onClick={this.deleteTodo}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default TodoList;
