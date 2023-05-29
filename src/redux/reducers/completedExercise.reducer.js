const completedExercisesReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_COMPLETED_EXERCISES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default completedExercisesReducer;