import React from 'react';
import PropTypes from 'prop-types';

const LoginInput = (props) => {
  const { onLoginChange } = props;

  return (
    <label for="login-field">
      Введите логин
      <input
        type="text"
        name="login-field"
        onChange={(evt) => {
          evt.preventDefault();
          onLoginChange(evt.target.value);
        }}
      ></input>
    </label>
  );
};

LoginInput.propTypes = {
  onLoginChange: PropTypes.func.isRequired,
};

export default LoginInput;
