import React from 'react';

const Filter = ({value, onChange}) => {
    return (
    <label htmlFor="">
      Finde contacts by name
      <input type="text" name='filter' value={value} onChange={onChange} />
    </label>
    );
};

export default Filter;
