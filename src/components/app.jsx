import React from 'react';
import { connect } from 'react-redux';

import { dataBase } from './server/config.js';
import { ActionCreator, ActionType } from '../store/reducer.js';

import Authorization from './authorization/authorization.jsx';
import AdressesList from './adresses-list/adresses-list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      showingPage: 'auth',
    };

    this.authSuccessHandler = this.authSuccessHandler.bind(this);
  }

  authSuccessHandler() {
    const { userId, getUserAdressesHandler } = this.props;

    dataBase
      .collection('adresses')
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          getUserAdressesHandler(Object.values(doc.data()));
        }
        this.setState({ showingPage: 'adresses' });
      });
  }

  render() {
    const { user, userId } = this.props;
    const { showingPage } = this.state;

    switch (showingPage) {
      case 'auth':
        return <Authorization authSuccessHandler={this.authSuccessHandler} />;
      case 'adresses':
        return <AdressesList currentUserId={userId} authSuccessHandler={this.authSuccessHandler} />;
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser,
  userId: state.currentUserId,
});

const mapDispatchToProps = (dispatch) => ({
  getUserAdressesHandler(adresses) {
    dispatch(ActionCreator.adressesList(adresses));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
