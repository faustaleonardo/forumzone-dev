const authReducer = (state = {}, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'fetch_user':
      return payload || false;
    case 'login':
      return payload || false;
    case 'logout':
      return false;
    default:
      return state;
  }
};

export default authReducer;
