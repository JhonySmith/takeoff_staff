import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';

import AdressesItem from './adresses-item.jsx';
import AddAdressButton from './add-adress-button.jsx';
import SearchField from '../search-field/search-field.jsx';
import AddAdressForm from './add-adress-form.jsx';
import DataForm from './data-form.jsx';
import { dataBase } from '../server/config.js';

import firebase from 'firebase/app';
import 'firebase/firestore';

const MODS = {
  DEFAULT: 'default',
  EDIT: 'edit',
  NEW: 'new',
};

const AdressesList = (props) => {
  const { showingAdressesList, currentUserId, authSuccessHandler } = props;

  const [dataFormOpened, setDataFormOpened] = useState(false);
  const [dataForForm, setDataForForm] = useState([]);
  const [mode, setMode] = useState(MODS.DEFAULT);

  const addAdressHandler = (data) => {
    let id = Math.random().toString().split('.').join('');

    dataBase
      .collection('adresses')
      .doc(currentUserId)
      .update({
        [id]: {
          id,
          fio: data.fio,
          email: data.email,
          phone: data.phone,
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

  const openDataForm = (data) => {
    if (Array.isArray(data) && data.length) {
      setDataForForm(data);
      setMode(MODS.EDIT);
    } else {
      setDataForForm([]);
      setMode(MODS.NEW);
    }
    setDataFormOpened(true);
  };

  return (
    <React.Fragment>
      <SearchField />
      <AddAdressButton openDataFormHandler={openDataForm} />
      <ul>
        {showingAdressesList.map((adress) => (
          <AdressesItem
            adress={adress}
            removeAdressHandler={removeAdressHandler}
            editAdressHandler={editAdressHandler}
            openDataForm={openDataForm}
          />
        ))}
      </ul>
      {dataFormOpened ? (
        <DataForm
          data={dataForForm}
          eventHandler={mode === MODS.NEW ? addAdressHandler : editAdressHandler}
        />
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

AdressesList.propTypes = {
  showingAdressesList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  showingAdressesList: state.showingAdressesList,
});

export default connect(mapStateToProps, null)(AdressesList);
