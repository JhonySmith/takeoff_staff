import React from 'react';
import PropTypes from 'prop-types';

const LoginInput = (props) => {
  const { onLoginChange } = props;

  return (
    <label for="login-field" className="label label--login">
      Введите логин
      <input
        className="input input--login"
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
