import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* turnCompleteTrue(action) {
    try{
        yield axios.put(`/api/exercise/${action.payload}`);
        yield put({ type: 'SAGA_GET_ALL_EXERCISES' });
    } catch (error) {
        console.log('create exercise POST request failed', error);
    }
}

function* turnExerciseTrue () {
    yield takeLatest('SAGA_COMPLETE_EXERCISE_TRUE', turnCompleteTrue);
  }
  
  export default turnExerciseTrue;