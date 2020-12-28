import React, { useState } from 'react';

import { adressDataAdapter } from '../utils/data-adapters.js';

const AddAdressForm = (props) => {
  const { addAdressHandler, setShowAddForm } = props;

  const [fio, setFio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <form>
      <label for="fio">
        ФИО
        <input type="text" name="fio" onChange={(evt) => setFio(evt.target.value)}></input>
      </label>
      <label for="email">
        email
        <input type="email" name="email" onChange={(evt) => setEmail(evt.target.value)}></input>
      </label>
      <label for="phone-number">
        phone
        <input type="phone" name="phone" onChange={(evt) => setPhone(evt.target.value)}></input>
      </label>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          addAdressHandler(fio, email, phone);
        }}
      >
        Добавить
      </button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setShowAddForm(false);
        }}
      >
        Отмена
      </button>
    </form>
  );
};

export default AddAdressForm;
