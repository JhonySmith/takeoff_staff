import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = (props) => {
  const { onPasswordChange } = props;

  return (
    <label for="password-field" className="label label--password">
      Введите пароль
      <input
        className="input input--password"
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
