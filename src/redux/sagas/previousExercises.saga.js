import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* makePreviousExercise(action) {
    try{
        yield axios.post('/api/completed', action.payload);
        console.log("Here is the data we are sending", action.payload);
        yield put({ type: 'SAGA_GET_ALL_EXERCISES' });
    } catch (error) {
        console.log('create exercise POST request failed', error);
    }
}
function* previousExercise() {
    yield takeLatest('SAGA_CREATE_PREVIOUS_EXERCISE', makePreviousExercise);
  }
  
  export default previousExercise;