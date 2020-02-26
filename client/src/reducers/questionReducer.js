const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'fetch_questions':
      const questions = action.payload.data;
      return questions.data;
    default:
      return state;
  }
};

export default questionReducer;
