import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchThisExercise(action) {
    try {
      const thisExercise = yield axios.get(`/api/exercise/${action.payload}`);
      yield put({ type: 'GET_THIS_EXERCISE', payload: thisExercise.data});
      console.log('this is the single exercise', thisExercise.data);
    } catch (error) {
         console.log('User get request failed', error);
    }
  }

function* getThisExerciseSaga() {
    yield takeLatest('SAGA_GET_ONLY_EXERCISE', fetchThisExercise);
  }
  
  export default getThisExerciseSaga;