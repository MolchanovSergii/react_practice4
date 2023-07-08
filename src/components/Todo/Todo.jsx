import { RiDeleteBinLine } from 'react-icons/ri';
import {
  AiFillDislike,
  AiFillLike,
  AiFillSave,
  AiFillEdit,
} from 'react-icons/ai';
import { Text } from 'components';
import {
  DeleteButton,
  TodoWrapper,
  LikeButton,
  EditButton,
  InputEdit,
} from './Todo.styled';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  incrementLike,
  decrementLike,
  editToto,
} from 'redux/todosSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, id, likes }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState('');
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    setIsEdit(false);
    dispatch(editToto({ id, text: newText }));
  };

  const handleChange = event => {
    setNewText(event.target.value);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>
          {isEdit ? (
            <InputEdit defaultValue={text} onChange={handleChange} />
          ) : (
            <>{text}</>
          )}
        </Text>
        <Text>
          {likes}
          <LikeButton onClick={() => dispatch(incrementLike(id))}>
            <AiFillLike size={24} />
          </LikeButton>
          <LikeButton onClick={() => dispatch(decrementLike(id))}>
            <AiFillDislike size={24} />
          </LikeButton>
        </Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        {isEdit ? (
          <EditButton type="button" onClick={handleSave}>
            <AiFillSave size={24} />
          </EditButton>
        ) : (
          <EditButton type="button" onClick={handleEdit}>
            <AiFillEdit size={24} />
          </EditButton>
        )}
      </TodoWrapper>
    </>
  );
};
