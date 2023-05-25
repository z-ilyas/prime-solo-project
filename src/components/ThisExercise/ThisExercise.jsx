import React from "react";
import { useSelector } from "react-redux";
import { useState} from 'react';

function ThisExercise() {
    const thisExercise = useSelector((store) => store.specificExercise);
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [liftngWeight, setLiftingWeight] = useState('');

    return(
        <div>
            {thisExercise.map(theexercise => {
                    return(
                        <p >{theexercise.name}</p>                )
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
        <button>Delete</button>
        <button>Complete</button>
        </div>
    )
}
export default ThisExercise;