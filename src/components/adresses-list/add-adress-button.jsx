import React from 'react';

const AddAdressButton = (props) => {
  const { openDataFormHandler } = props;

  return (
    <button
      onClick={(evt) => {
        evt.preventDefault();
        openDataFormHandler();
      }}
    >
      Добавить
    </button>
  );
};

export default AddAdressButton;
