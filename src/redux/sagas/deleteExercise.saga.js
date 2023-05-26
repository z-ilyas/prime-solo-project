import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteThisExercise(action) {
    try {
      yield axios.delete(`/api/exercise/${action.payload}`);
      yield put({ type: 'SAGA_GET_ALL_EXERCISES' });
    } catch (error) {
         console.log('User get request failed', error);
    }
  }

function* deleteExercise () {
    yield takeLatest('SAGA_DELETE_THIS_EXERCISE', deleteThisExercise);
  }
  
  export default deleteExercise;