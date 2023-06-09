import React from 'react';
import {useSelector} from 'react-redux';
import DisplayExercises from '../DisplayExercises/DisplayExercises';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <DisplayExercises/>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
