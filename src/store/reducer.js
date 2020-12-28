const ActionType = {
  CURRENT_USER: 'CURRENT_USER',
  ADRESSES_LIST: 'ADRESSES_LIST',
  CURRENT_USER_ID: 'CURRENT_USER_ID',
};

const initialState = {
  currentUser: '',
  currentUserId: '',
  adressesList: [],
};

const ActionCreator = {
  currentUser: (user) => {
    return {
      type: ActionType.CURRENT_USER,
      payload: user,
    };
  },
  currentUserId: (userId) => {
    return {
      type: ActionType.CURRENT_USER_ID,
      payload: userId,
    };
  },
  adressesList: (list) => {
    return {
      type: ActionType.ADRESSES_LIST,
      payload: list,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.payload,
      });
    case ActionType.CURRENT_USER_ID:
      return Object.assign({}, state, {
        currentUserId: action.payload,
      });
    case ActionType.ADRESSES_LIST:
      return Object.assign({}, state, {
        adressesList: action.payload,
      });
    default:
      return state;
  }
};

export { ActionType, ActionCreator, reducer };
