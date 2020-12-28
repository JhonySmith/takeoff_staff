import React from 'react';

const AddAdressButton = (props) => {
  const { setShowAddForm } = props;

  return (
    <button
      onClick={(evt) => {
        evt.preventDefault();
        setShowAddForm(true);
      }}
    >
      Добавить
    </button>
  );
};

export default AddAdressButton;
