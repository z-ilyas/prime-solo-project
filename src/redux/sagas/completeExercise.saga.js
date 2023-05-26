import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* completeTheExercise(action) {
    try{
        yield axios.post(`/api/exercise/${action.payload.id}`, action.payload);
        console.log('check for id', action.payload);
    } catch (error) {
        console.log('create exercise POST request failed', error);
    }
}

function* completeExercise() {
    yield takeLatest('SAGA_COMPLETE__EXERCISE', completeTheExercise);
  }
  
  export default completeExercise;