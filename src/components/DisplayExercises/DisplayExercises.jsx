import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
function DisplayExercises() {

    const [theDate, setTheDate] = useState();
    // const allExercises = useSelector((store) => store.getAllExercises);
    // console.log('this is all the exercises', allExercises);
    const dispatch = useDispatch();

    const dateSelected = () => {
        dispatch({ 
                    type: 'SAGA_GET_ALL_EXERCISES',
                    payload:  theDate
                });
    }

    return(
        <div>
            <input type = "date" onChange={e => setTheDate(e.target.value)}/>
            <button onClick={dateSelected}>Select</button>
        </div>
    );
}
export default DisplayExercises;