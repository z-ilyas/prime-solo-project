import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function DisplayExercises() {

    const [theDate, setTheDate] = useState();

    const allExercises = useSelector((store) => store.getAllExercises);

    const dispatch = useDispatch();
    const history = useHistory();
    const id = useParams();

    const dateSelected = () => {
        dispatch({ 
                    type: 'SAGA_GET_ALL_EXERCISES',
                });
    }
    const rightDate = (date, name) => {
        if('2023-05-23T05:00:00.000Z' === date){
            return (
                <p>{name}</p>
            )
        }
    }

    const selectedExercise = () => {
        dispatch({ 
            type: 'SAGA_GET_ONLY_EXERCISE',
            payload: id
        });
        history.push(`/thisExercise/${id}`);
    }
     
    const goToCreatePage = () => {
        history.push('/createExercise');
    }

    return(
        <div>
            <input type = "date" onChange={e => setTheDate(e.target.value)}/>
            <button onClick={dateSelected}>Select</button>
                {allExercises.map(exercise => {
                    return(
                <p onClick={selectedExercise} key={exercise.id}>{rightDate(exercise.date, exercise.name)}</p>
                )
                })}
            <button onClick={goToCreatePage} >+</button>
        </div>
    );
}
export default DisplayExercises;