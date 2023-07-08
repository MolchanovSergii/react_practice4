import { InputSearch } from 'components/SearchForm/SearchForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleInput = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={filter}
        autoFocus
      />
    </>
  );
};
