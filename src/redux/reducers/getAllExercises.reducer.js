const getAllExercises = (state = [], action) => {
    switch (action.type) {
      case 'GET_ALL_EXERCISES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default getAllExercises;