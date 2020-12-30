import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DataForm = (props) => {
  const { eventHandler, setDataFormOpen, data, id } = props;

  const [fio, setFio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (data) {
      setFio(data.fio);
      setEmail(data.email);
      setPhone(data.phone);
    }
  });

  const sendEndData = () => {
    let endData = {
      id,
      fio,
      email,
      phone,
    };
    eventHandler(endData);
  };

  return (
    <form>
      <label for="fio">
        ФИО
        <input
          type="text"
          value={fio}
          name="fio"
          onChange={(evt) => setFio(evt.target.value)}
        ></input>
      </label>
      <label for="email">
        email
        <input
          type="email"
          value={email}
          name="email"
          onChange={(evt) => setEmail(evt.target.value)}
        ></input>
      </label>
      <label for="phone-number">
        phone
        <input
          type="phone"
          value={phone}
          name="phone"
          onChange={(evt) => setPhone(evt.target.value)}
        ></input>
      </label>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          sendEndData();
        }}
      >
        ОК
      </button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setDataFormOpen(false);
        }}
      >
        Отмена
      </button>
    </form>
  );
};

DataForm.propTypes = {
  eventHandler: PropTypes.func.isRequired,
  setDataFormOpen: PropTypes.func.isRequired,
  data: PropTypes.object,
  id: PropTypes.string,
};

export default DataForm;
