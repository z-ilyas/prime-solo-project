import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getAllExercisesSaga from './getAllExercises.saga';
import createExercise from './createExercise.saga';
import getThisExerciseSaga from './thisExercise.saga';
import deleteExercise from './deleteExercise.saga';
import completeExercise from './completeExercise.saga';
import turnExerciseTrue from './turnExerciseTrue.saga';
import completedExercise from './completedExercises.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getAllExercisesSaga(),
    createExercise(),
    getThisExerciseSaga(),
    deleteExercise(),
    completeExercise(),
    turnExerciseTrue(),
    completedExercise()
  ]);
}
