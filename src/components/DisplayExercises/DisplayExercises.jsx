import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DisplayExercises() {

    const [theDate, setTheDate] = useState();
    const allExercises = useSelector((store) => store.getAllExercises);

    const dispatch = useDispatch();
    const history = useHistory();

    const dateSelected = () => {
        dispatch({ 
                    type: 'SAGA_GET_ALL_EXERCISES',
                });
    }

    const rightDate = (date, name) => {
        if(theDate === date){
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
        history.push("/thisExercise");
    }
     
    const goToCreatePage = () => {
        history.push('/createExercise');
    }
    const goToUserPage = () => {
        history.push('/user');
    }

    return(
        <div>
            <input type = "date" onChange={e => setTheDate(e.target.value)}/>
            <button onClick={dateSelected}>Select</button>
                {allExercises.map(exercise => {
                    return(
                        <p key={exercise.id} onClick={() => selectedExercise(exercise.id)}>{rightDate(exercise.date, exercise.name)}</p>                )
                })}
            <button onClick={goToCreatePage} >+</button>
        </div>
    );
}
export default DisplayExercises;