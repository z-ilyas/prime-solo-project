import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from "sweetalert2";

function CreateExercise() {
    
    const [Previous, setPrevious] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const completedExercises = useSelector((store) => store.completedExercisesReducer);

    const createExercise = () => {
        if(name === '' || date === '' || Previous === ''){
            Swal.fire({
                icon: 'error',
                title: 'PLEASE FILL IN ALL THE INPUTS',
              })
        }
        else if(name){
        dispatch({ 
            type: 'SAGA_CREATE_EXERCISE',
            payload:{
                name: name,
                date: date,
                is_completed: false
            }
        });
        setName('');
        }
        else if (Previous){
            dispatch({ 
                type: 'SAGA_CREATE_PREVIOUS_EXERCISE',
                payload:{
                    name: Previous,
                    date: date,
                    is_completed: false
                }
            }); 
        }
    }
    const goToUserPage = () => {
        history.push('/user');
    }
    
    return(
     <div>
        <select value={Previous} onChange={(event) => setPrevious(event.target.value)}>
            <option>Drop Down</option>
            <option value="newExercise"> 
                <p>Create New Exercise</p>
            </option>
            {completedExercises.map(exercise => (
            <option key={exercise.id} value={exercise.name}>
                <p>{exercise.name}</p>
          </option>
          ))}
        </select>
        {Previous === 'newExercise' && (
        <input
            placeholder='Create New Exercise'
            type="text"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}    
        />
        )}
        <input type = "date" onChange={e => setDate(e.target.value)}/>  
        <button onClick={createExercise}>Create</button>
        <button onClick={goToUserPage}>Back</button>
     </div>
    )
}
export default CreateExercise;