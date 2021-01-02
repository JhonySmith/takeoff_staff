import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DataForm = (props) => {
  const { eventHandler, data } = props;

  const fioRef = React.createRef();
  const emailRef = React.createRef();
  const phoneRef = React.createRef();

  useEffect(() => {
    if (Array.isArray(data) && data.length) {
      fioRef.current.value = data.fio;
      emailRef.current.value = data.email;
      phoneRef.current.value = data.phone;
    }
  }, [data]);

  const sendEndData = () => {
    let endData = {
      id: data.id || '',
      fio: fioRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    eventHandler(endData);
  };

  return (
    <form>
      <label for="fio">
        ФИО
        <input ref={fioRef} type="text" name="fio" defaultValue=""></input>
      </label>
      <label for="email">
        email
        <input ref={emailRef} type="email" name="email"></input>
      </label>
      <label for="phone-number">
        phone
        <input ref={phoneRef} type="phone" name="phone"></input>
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
