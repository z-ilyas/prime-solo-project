import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function CreateExercise() {
    const [name, setName] = useState('');
    const [date, setDate] = useState();
    const dispatch = useDispatch();
    const history = useHistory();


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
        setDate();
    }
    const goToUserPage = () => {
        history.push('/user');
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
        <button onClick={createExercise}>Create</button>
        <button onClick={goToUserPage}>Back</button>
     </div>
    )
}
export default CreateExercise;