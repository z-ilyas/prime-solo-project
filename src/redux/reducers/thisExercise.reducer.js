const specificExercise = (state = {}, action) => {
    switch (action.type) {
      case 'GET_THIS_EXERCISE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default specificExercise;