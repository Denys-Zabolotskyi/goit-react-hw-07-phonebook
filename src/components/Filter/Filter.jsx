import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onHandelChange = evt => {
    const inputValue = evt.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <Label>
      Finde contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onHandelChange}
      />
    </Label>
  );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
