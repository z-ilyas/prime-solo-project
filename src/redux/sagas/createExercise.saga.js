import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* makeTheExercise(action) {
    try{
        yield axios.post('/api/exercise', action.payload);
        console.log(action.payload);
        yield put({ type: 'SAGA_GET_ALL_EXERCISES' });
    } catch (error) {
        console.log('create exercise POST request failed', error);
    }
}

function* createExercise() {
    yield takeLatest('SAGA_CREATE_EXERCISE', makeTheExercise);
  }
  
  export default createExercise;