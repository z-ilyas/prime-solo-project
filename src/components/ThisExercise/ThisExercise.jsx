import React from "react";
import { useSelector } from "react-redux";
import { useState} from 'react';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ThisExercise() {
    const thisExercise = useSelector((store) => store.specificExercise);
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [liftngWeight, setLiftingWeight] = useState('');
    const dispatch = useDispatch();

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
        type="text"
        value={sets}
        required
        onChange={(event) => setSets(event.target.value)}    
        />
        <input
        placeholder='reps'
        type="text"
        value={reps}
        required
        onChange={(event) => setReps(event.target.value)}    
        />
        <input
        placeholder='Lifting Weight'
        type="text"
        value={liftngWeight}
        required
        onChange={(event) => setLiftingWeight(event.target.value)}    
        />
        <button onClick={deleteExercise}>Delete</button>
        <button>Complete</button>
        </div>
    )
}
export default ThisExercise;