import React, { useEffect } from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LogOutButton from '../LogOutButton/LogOutButton';

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
        return null; 
        
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

    const filteredExercises = allExercises.filter((exercise) => {
        const date = new Date(exercise.date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const exerciseDate = `${year}-${month}-${day}`;
    
        return exerciseDate === theDate;
      });

    return(
        <div>
            <div>
                <input 
                className='displayDate'
                type = "date" 
                onChange={e => setTheDate(e.target.value)}/>
            </div>
            {filteredExercises.length > 0 && (
            <div>
                <ul className='exercisesContainer'>
                    {filteredExercises.map(exercise => {
                        return(
                            <div className='exerciseBox' key={exercise.id} onClick={() => selectedExercise(exercise.id)}>
                                <li className='exercise'>{rightDate(exercise.date, exercise.name)}</li>                
                            </div>
                        )})}
                </ul>
            </div>
            )}
            <footer className="footerDisplayPage">
                <button onClick={goToCreatePage}>+</button>
                <LogOutButton/>
            </footer>
        </div>
        
    );
}
export default DisplayExercises;