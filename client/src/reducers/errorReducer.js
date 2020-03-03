const errorReducer = (state = '', action) => {
  const { payload } = action;

  switch (action.type) {
    case 'get_error':
      return payload || false;
    case 'clear_error':
      return payload;
    default:
      return state;
  }
};

export default errorReducer;
