import React from 'react';
import PropTypes from 'prop-types';

const RegistrationButton = (props) => {
  const { onRegisterButtonHandler } = props;

  return (
    <button
      className="button button--registr"
      onClick={(evt) => {
        evt.preventDefault();
        onRegisterButtonHandler();
      }}
    >
      Регистрация
    </button>
  );
};

RegistrationButton.propTypes = {
  onRegisterButtonHandler: PropTypes.func.isRequired,
};

export default RegistrationButton;
