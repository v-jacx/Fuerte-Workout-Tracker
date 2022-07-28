import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ExerciseTracking from '../components/ExerciseTracking'

export default function ExerciseView(){
    const [exercises, setExercises]=useState([])
    const [selectedExercise, setSelectedExercise]=useState('')
    const [exerciseClicked, setExerciseClicked]=useState(false)
    const location = useLocation()
    const id = location.state.id
    const workout = location.state.name



const getExercises = async ()=>{
    const workoutExercises = await axios.get(`http://localhost:3001/api/exercise/${id}`)
    setExercises(workoutExercises.data.exercises)
}    

useEffect(()=>{
    getExercises();
},[id])


const handleOnClick=(e)=>{
    setSelectedExercise(e);
    setExerciseClicked(true);
}

    return (
        <div className='exercise-tracking'>
        <div className='workout-container'>
            <div className='workout workout-label' id='label'>
                <h1 id='workout-name'>{workout}</h1>              
            </div>
            {exercises.map((exercise)=>(
                <div key={exercise.name} className='workout workout-label workouts-container' onClick={()=>handleOnClick(exercise)}>
                    <h3 className='exercise' >{exercise.name}</h3>
                </div>  
                    ))}
        </div>
            <div className="display workout-container">
                {exerciseClicked ? <ExerciseTracking exercise={selectedExercise}/>:null}
            
            </div>
        </div>

    )
}
