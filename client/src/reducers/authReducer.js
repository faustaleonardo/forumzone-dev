const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'fetch_user':
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
