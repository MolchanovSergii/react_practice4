import { Grid } from './Grid/Grid.styled';
import { GridItem } from './Grid/Grid.styled';
import { Todo } from './Todo/Todo';
import { Text } from './Text/Text.styled';

const TodoList = () => {
  const todos = [{ id: 1, text: 'potato' }];

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
