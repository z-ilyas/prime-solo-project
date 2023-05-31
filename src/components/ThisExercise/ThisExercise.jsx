import React from "react";
import { useSelector } from "react-redux";
import { useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";


function ThisExercise() {
    const thisExercise = useSelector((store) => store.specificExercise);
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [liftingWeight, setLiftingWeight] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const convertDate = (sqlDate) => {
        const date = new Date (sqlDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0'); 
        return `${year}-${month}-${day}`;
    }
    let { id } = useParams();

    const deleteExercise = () => {
        dispatch({
                    type: 'SAGA_DELETE_THIS_EXERCISE',
                    payload: id
                })
        history.push('/user');
    }
    const completedTheExercise = () => {
        if(sets === '' || reps === '' || liftingWeight === ''){
            Swal.fire({
                icon: 'error',
                title: 'PLEASE FILL IN ALL THE INPUTS',
              })
        }else{
        dispatch({
                    type: 'SAGA_COMPLETE__EXERCISE',
                    payload: {
                        id: id,
                        sets: sets,
                        reps: reps,
                        liftingWeight: liftingWeight
                    }
                })
                dispatch({
                    type: 'SAGA_COMPLETE_EXERCISE_TRUE',
                    payload: id
                })
        history.push('/user');
        }
    }
    const goToUserPage = () => {
        history.push('/user');
    }
    const goToCreatePage = () => {
        history.push('/createExercise');
        dispatch({
            type: 'SAGA_FETCH_COMPLETED_EXERCISES'
        })
    }
    return(
        <div>
            {thisExercise.map((theexercise) => {
                    return(
                        <>
                            <p>{convertDate(theexercise.date)}</p>
                            <p>{theexercise.name}</p>
                        </>                )
            })}
        <input
        placeholder='sets'
        type="number"
        value={sets}
        required
        onChange={(event) => setSets(event.target.value)}    
        />
        <input
        placeholder='reps'
        type="number"
        value={reps}
        required
        onChange={(event) => setReps(event.target.value)}    
        />
        <input
        placeholder='Lifting Weight'
        type="number"
        value={liftingWeight}
        required
        onChange={(event) => setLiftingWeight(event.target.value)}    
        />
        <button onClick={deleteExercise}>Delete</button>
        <button onClick={completedTheExercise}>Complete</button>

        <footer className="footerThisExercise">
                <button onClick={goToCreatePage}>+</button>
                <button onClick={goToUserPage}>Back</button>
        </footer>
        
        </div>
    )
}
export default ThisExercise;