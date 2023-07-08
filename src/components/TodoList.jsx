import { Grid } from './Grid/Grid.styled';
import { GridItem } from './Grid/Grid.styled';
import { Todo } from './Todo/Todo';
import { Text } from './Text/Text.styled';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'redux/selectors';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const visibleTodos = todos.filter(({ text }) =>
    text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      <Grid>
        {todos.length > 0 &&
          visibleTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
                likes={todo.likes}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default TodoList;
