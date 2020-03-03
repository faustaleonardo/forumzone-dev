const authReducer = (state = {}, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'fetch_user':
      return payload || false;
    case 'signup':
      return payload;
    case 'login':
      return payload || false;
    case 'logout':
      return payload;
    default:
      return state;
  }
};

export default authReducer;
