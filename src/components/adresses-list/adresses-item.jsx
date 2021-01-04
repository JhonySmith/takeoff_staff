import React from 'react';
import PropTypes from 'prop-types';

const AdressesItem = (props) => {
  const { removeAdressHandler, adress, index, openDataForm, editAdressHandler } = props;

  const onEditButtonClick = () => {
    openDataForm(adress);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{adress.fio}</td>
      <td>{adress.email}</td>
      <td>{adress.phone}</td>
      <td>
        <button
          className="action-button"
          onClick={(evt) => {
            evt.preventDefault();
            onEditButtonClick();
          }}
        >
          <span>Изменить</span>
        </button>
      </td>
      <td>
        <button
          className="action-button"
          onClick={(evt) => {
            evt.preventDefault();
            removeAdressHandler(adress.id);
          }}
        >
          <span>Удалить</span>
        </button>
      </td>
    </tr>
  );
};

AdressesItem.propTypes = {
  editHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired,
  adress: PropTypes.object.isRequired,
};

export default AdressesItem;
