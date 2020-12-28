import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = (props) => {
  const { onLoginButtonHandler } = props;

  return (
    <button
      onClick={(evt) => {
        evt.preventDefault();
        onLoginButtonHandler();
      }}
    >
      Войти
    </button>
  );
};

LoginButton.propTypes = {
  onLoginButtonHandler: PropTypes.func.isRequired,
};

export default LoginButton;
