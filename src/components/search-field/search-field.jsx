import React from 'react';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/reducer.js';

const SearchField = (props) => {
  const { adressesList, showSearchResult } = props;

  const searchTextRef = React.createRef();

  const onChangeSearchText = () => {
    const searchRegExpText = new RegExp(searchTextRef.current.value, 'i');
    let filteredAdresses = adressesList
      .slice()
      .filter((adress) => searchRegExpText.test(adress.fio));
    showSearchResult(filteredAdresses);
  };

  return (
    <label for="search" className="search-label">
      Быстрый поиск
      <input
        className="search-input"
        ref={searchTextRef}
        type="text"
        onChange={(evt) => {
          evt.preventDefault();
          onChangeSearchText();
        }}
        placeholder="Введите ФИО..."
      ></input>
    </label>
  );
};

const mapStateToProps = (state) => ({
  adressesList: state.adressesList,
});

const mapDispatchToProps = (dispatch) => ({
  showSearchResult(adressesResult) {
    dispatch(ActionCreator.showingAdressesList(adressesResult));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
