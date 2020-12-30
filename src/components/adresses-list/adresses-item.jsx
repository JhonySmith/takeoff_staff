import React from 'react';
import PropTypes from 'prop-types';

const AdressesItem = (props) => {
  const { editHandler, removeAdressHandler, adress, setDataFormOpen } = props;

  const editButtonClickHandler = () => {
    setDataFormOpen(true);

    return <>
  }

  return (
    <li>
      <ul>
        <li>ФИО: {adress.fio}</li>
        <li>email: {adress.email}</li>
        <li>Номер телефона: {adress.phone}</li>
        <li>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              editHandler();
            }}
          >
            <span>Изменить</span>
          </button>
        </li>
        <li>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              removeAdressHandler(adress.id);
            }}
          >
            <span>Удалить</span>
          </button>
        </li>
      </ul>
    </li>
  );
};

AdressesItem.propTypes = {
  editHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired,
  adress: PropTypes.object.isRequired,
};

export default AdressesItem;
