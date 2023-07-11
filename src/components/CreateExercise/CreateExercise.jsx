import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";

function CreateExercise() {
    const [previous, setPrevious] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const completedExercises = useSelector((store) => store.completedExercisesReducer);

    const createExercise = () => {
        if (previous === 'newExercise') {
            if (name !== '') {
                console.log("Dispatching SAGA_CREATE_EXERCISE action");
                dispatch({
                    type: 'SAGA_CREATE_EXERCISE',
                    payload: {
                        name: name,
                        date: date,
                        is_completed: false,
                    },
                });
                setName('');
            } else {
                console.log("Fields are empty, displaying alert. Name:", name, "Date:", date);
                Swal.fire({
                    icon: 'error',
                    title: 'PLEASE FILL IN ALL THE INPUTS',
                });
            }
        } else if (previous) {
            console.log("Dispatching SAGA_CREATE_PREVIOUS_EXERCISE action");
            dispatch({
                type: 'SAGA_CREATE_PREVIOUS_EXERCISE',
                payload: {
                    name: previous,
                    date: date,
                    is_completed: false,
                },
            });
        }
        setName('');
    };
    
    // Add the following useEffect hook to check the state values after setting them
    useEffect(() => {
    }, [name, date]);

    const goToUserPage = () => {
        history.push('/user');
    }
    
    return(
        <div>
     <div className="create-exercise-container">
        <select value={previous} onChange={(event) => setPrevious(event.target.value)}>
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
        {previous === "newExercise" && (
        <input
            className="name-input"
            placeholder='Create New Exercise'
            type="text"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}    
        />
        )}
        <div className="date-input">
            <input type = "date" onChange={e => setDate(e.target.value)}/>  
        </div>
        <button className="create-btn" onClick={createExercise}>Create</button>
        </div>
        <div className="back-btn" >
        <button onClick={goToUserPage}>Back</button>
        </div>
     </div>
    )
}
export default CreateExercise;