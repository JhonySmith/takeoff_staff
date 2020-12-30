import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AdressesItem from './adresses-item.jsx';
import AddAdressButton from './add-adress-button.jsx';
import AddAdressForm from './add-adress-form.jsx';
import { dataBase } from '../server/config.js';

import firebase from 'firebase/app';
import 'firebase/firestore';

const AdressesList = (props) => {
  const { adressesList, currentUserId, authSuccessHandler } = props;

  const [showAddForm, setShowAddForm] = useState(false);
  const [dataFormOpen, setDataFormOpen] = useState(false);

  const addAdressHandler = (fio, email, phone) => {
    let id = Math.random().toString().split('.').join('');

    dataBase
      .collection('adresses')
      .doc(currentUserId)
      .update({
        [id]: {
          id,
          fio,
          email,
          phone,
        },
      })
      .then(() => {
        authSuccessHandler();
      });
  };

  const removeAdressHandler = (id, fio, email, phone) => {
    dataBase
      .collection('adresses')
      .doc(currentUserId)
      .update({
        [id]: firebase.firestore.FieldValue.delete(),
      })
      .then(() => {
        authSuccessHandler();
      });
  };

  const editAdressHandler = (data) => {
    dataBase
      .collection('adresses')
      .doc(currentUserId)
      .update({
        [data.id]: {
          id: data.id,
          fio: data.fio,
          email: data.email,
          phone: data.phone,
        },
      })
      .then(() => {
        authSuccessHandler();
      });
  };

  return (
    <React.Fragment>
      <AddAdressButton setShowAddForm={setShowAddForm} />
      <ul>
        {adressesList.map((adress) => (
          <AdressesItem
            adress={adress}
            removeAdressHandler={removeAdressHandler}
            editAdressHandler={editAdressHandler}
            setDataFormOpen={setDataFormOpen}
          />
        ))}
      </ul>
      {showAddForm ? (
        <AddAdressForm setShowAddForm={setShowAddForm} addAdressHandler={addAdressHandler} />
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

AdressesList.propTypes = {
  adressesList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  adressesList: state.adressesList,
});

export default connect(mapStateToProps, null)(AdressesList);
