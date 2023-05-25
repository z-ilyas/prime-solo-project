import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllExercises(action) {
    try {
      const allExercises = yield axios.get('/api/exercise');
      yield put({ type: 'GET_ALL_EXERCISES', payload: allExercises.data});
    } catch (error) {
         console.log('User get request failed', error);
    }
  }

function* getAllExercisesSaga() {
    yield takeLatest('SAGA_GET_ALL_EXERCISES', fetchAllExercises);
  }
  
  export default getAllExercisesSaga;