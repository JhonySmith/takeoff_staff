import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/reducer.js';
import { authorization } from '../server/config.js';

import LoginInput from './login-input.jsx';
import PasswordInput from './password-input.jsx';
import LoginButton from './login-button.jsx';
import RegistrationButton from './registration-button.jsx';
import ErrorMessage from './error-message.jsx';

const Authorization = (props) => {
  const { authEndHandler, authSuccessHandler } = props;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLoginButtonHandler = () => {
    authorization
      .signInWithEmailAndPassword(login, password)
      .then(() => {
        authEndHandler(login, authorization.currentUser.uid);
        authSuccessHandler();
      })
      .catch((error) => {
        setErrorMessageHandler(error.code);
      });
  };

  const onRegisterButtonHandler = () => {
    authorization
      .createUserWithEmailAndPassword(login, password)
      .then(() => {
        authEndHandler(login, authorization.currentUser.uid);
        authSuccessHandler();
      })
      .catch((error) => {
        setErrorMessageHandler(error.code);
      });
  };

  const setErrorMessageHandler = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        setError('Такого пользователя не существует');
        break;

      case 'auth/invalid-email':
        setError('Вы ввели некорректный адрес почты');
        break;

      case 'auth/wrong-password':
        setError('Проверьте правильность пароля');
        break;

      case 'auth/email-already-in-use':
        setError('Такой пользователь уже существует');
        break;

      case 'auth/weak-password':
        setError('Пароль ненадежен');
        break;

      default:
        setError(errorCode);
    }
  };

  return (
    <form>
      <LoginInput onLoginChange={setLogin} />
      <PasswordInput onPasswordChange={setPassword} />
      <LoginButton onLoginButtonHandler={onLoginButtonHandler} />
      <RegistrationButton onRegisterButtonHandler={onRegisterButtonHandler} />
      <ErrorMessage error={error} />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authEndHandler(user, userId) {
    dispatch(ActionCreator.currentUserId(userId)), dispatch(ActionCreator.currentUser(user));
  },
});

export default connect(null, mapDispatchToProps)(Authorization);
