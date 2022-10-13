import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ExerciseTracking from '../components/ExerciseTracking'
import Nav from '../components/Nav'

export default function ExerciseView(props){
    const [exercises, setExercises]=useState([])
    const [selectedExercise, setSelectedExercise]=useState('')
    const [exerciseClicked, setExerciseClicked]=useState(false)
    const location = useLocation()
    const id = location.state.id
    const workout = location.state.name
    const user = location.state.user



const getExercises = async ()=>{
    const workoutExercises = await axios.get(`https://fuerte-api.onrender.com/api/exercise/${id}`)
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
        <div>     
            <header>
                <Nav user={user}/>
            </header>
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
                    {exerciseClicked ? <div className="display workout-container">
                    <ExerciseTracking exercise={selectedExercise} setExercise={setSelectedExercise}/></div>:null}
                

            </div>
        </div></div>

    )
}
