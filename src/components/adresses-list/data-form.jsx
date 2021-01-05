import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import ErrorMessage from '../authorization/error-message.jsx';

const DataForm = (props) => {
  const { eventHandler, data, setDataFormOpened, adresses } = props;

  const fioRef = React.createRef();
  const emailRef = React.createRef();
  const phoneRef = React.createRef();

  const [error, setError] = useState('');

  useEffect(() => {
    if (Array.isArray(Object.values(data)) && Object.values(data).length) {
      fioRef.current.value = data.fio;
      emailRef.current.value = data.email;
      phoneRef.current.value = data.phone;
    } else {
      fioRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
    }
  }, [data]);

  const validateData = () => {
    const fioReg = new RegExp(fioRef.current.value, 'i');

    const alredyExist = adresses.slice().filter((adress) => fioReg.test(adress.fio));
    if (!validator.isEmail(emailRef.current.value)) {
      setError('Неверный формат адреса');
    } else if (!validator.isMobilePhone(phoneRef.current.value)) {
      setError('Введен неправильный форма номера телефона');
    } else if (!fioRef.current.value) {
      setError('Вы не указали ФИО');
    } else if (alredyExist.length) {
      setError('Такой контакт уже существует');
    } else {
      setError('');
      sendEndData();
    }
  };

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
    <form className="data-form">
      <label className="data-form__label" for="fio">
        ФИО:
        <input
          className="data-form__input"
          ref={fioRef}
          type="text"
          name="fio"
          defaultValue=""
        ></input>
      </label>
      <label className="data-form__label" for="email">
        Email:
        <input className="data-form__input" ref={emailRef} type="email" name="email"></input>
      </label>
      <label className="data-form__label" for="phone-number">
        Phone:
        <input className="data-form__input" ref={phoneRef} type="phone" name="phone"></input>
      </label>
      <button
        className="data-form__button"
        onClick={(evt) => {
          evt.preventDefault();
          validateData();
        }}
      >
        ОК
      </button>
      <button
        className="data-form__button"
        onClick={(evt) => {
          evt.preventDefault();
          setDataFormOpened(false);
        }}
      >
        Отмена
      </button>
      <ErrorMessage error={error} />
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
