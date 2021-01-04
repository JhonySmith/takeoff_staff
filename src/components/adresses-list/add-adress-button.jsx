import React from 'react';

const AddAdressButton = (props) => {
  const { openDataFormHandler } = props;

  return (
    <button
      className="new-adress-button"
      onClick={(evt) => {
        evt.preventDefault();
        openDataFormHandler();
      }}
    >
      Добавить новый адрес
    </button>
  );
};

export default AddAdressButton;
