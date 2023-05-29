import React, { useEffect } from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DisplayExercises() {

    const [theDate, setTheDate] = useState();
    const allExercises = useSelector((store) => store.getAllExercises);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'SAGA_GET_ALL_EXERCISES'
        })
      }, []);
 
    const rightDate = (sqlDate, name) => {
        const date = new Date (sqlDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0'); 
        const correctDate =  `${year}-${month}-${day}`;

        if(theDate === correctDate){
            return (
                <p>{name}</p>
            )
        }
    }

    const selectedExercise = (id) => {
        dispatch({ 
            type: 'SAGA_GET_ONLY_EXERCISE',
            payload: id
        });
        history.push(`/thisExercise/${id}`);
    }
     
    const goToCreatePage = () => {
        history.push('/createExercise');
        dispatch({
            type: 'SAGA_FETCH_COMPLETED_EXERCISES'
        })
    }

    return(
        <div>
            <input type = "date" onChange={e => setTheDate(e.target.value)}/>
                {allExercises.map(exercise => {
                    return(
                        <p key={exercise.id} onClick={() => selectedExercise(exercise.id)}>{rightDate(exercise.date, exercise.name)}</p>                )
                })}
            <button onClick={goToCreatePage}>+</button>
        </div>
    );
}
export default DisplayExercises;