import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function DisplayExercises() {

    const [theDate, setTheDate] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ 
                    type: 'SAGA_GET_ALL_EXERCISES',
                    payload: theDate
                });
    }, []);

    return(
        <div>
            <input type = "date" onChange={e => setTheDate(e.target.value)}/>
        </div>
    );
}
export default DisplayExercises;