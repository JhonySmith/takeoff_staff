import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = (props) => {
  const { onPasswordChange } = props;

  return (
    <label for="password-field">
      Введите логин
      <input
        type="password"
        name="password-field"
        onChange={(evt) => {
          evt.preventDefault();
          onPasswordChange(evt.target.value);
        }}
      ></input>
    </label>
  );
};

PasswordInput.propTypes = {
  onPasswordChange: PropTypes.func.isRequired,
};

export default PasswordInput;
