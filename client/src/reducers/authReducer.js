const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'fetch_user':
      console.log(action.payload);
      break;
    default:
      return state;
  }
};

export default authReducer;
