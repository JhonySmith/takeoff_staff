import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  const { error } = props;

  return <div className="error-message">{error ? error : ''}</div>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
