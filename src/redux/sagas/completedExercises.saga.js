import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCompletedExercise() {
    try {
      const completeExercises = yield axios.get('/api/completed');
      console.log('Here is the completed Exercise', completeExercises.data);
      yield put({ type: 'GET_COMPLETED_EXERCISES', payload: completeExercises.data});
    } catch (error) {
         console.log('User get request failed', error);
    }
  }

function* completedExercise() {
    yield takeLatest('SAGA_FETCH_COMPLETED_EXERCISES', fetchCompletedExercise);
  }
  
  export default completedExercise;