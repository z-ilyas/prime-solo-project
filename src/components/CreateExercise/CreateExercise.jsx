import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CreateExercise() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const createExercise = () => {
        dispatch({ 
            type: 'SAGA_CREATE_EXERCISE',
            payload:{
                name: name,
                date: date,
                is_completed: false
            }
        });
        setName('');
        setDate('');
    }

    return(
     <div>
        <input
            placeholder='name'
            type="text"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}    
        />
        <input type = "date" onChange={e => setDate(e.target.value)}/>  
        <button>Reset</button>
        <button onClick={createExercise}>Create</button>
     </div>
    )
}
export default CreateExercise;