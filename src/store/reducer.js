const ActionType = {
  CURRENT_USER: 'CURRENT_USER',
  ADRESS_LIST: 'ADRESS_LIST',
};

const initState = {
  user: '',
  adressList: [],
};

const ActionCreator = {
  currentUser: (user) => {
    return {
      type: ActionType.CURRENT_USER,
      payload: user,
    };
  },
  adressList: (list) => {
    return {
      type: ActionCreator.ADRESS_LIST,
      payload: list,
    };
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CURRENT_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case ActionType.ADRESS_LIST:
      return Object.assign({}, state, {
        adressList: action.payload,
      });
  }
};

export { ActionType, ActionCreator, reducer };
