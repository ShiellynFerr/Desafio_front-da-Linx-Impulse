import React from 'react';
import { BoxInput } from './style';

const InputForm = ({ label, id, ...props }) => {
  return (
    <BoxInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </BoxInput>
  );
};

export default InputForm;
