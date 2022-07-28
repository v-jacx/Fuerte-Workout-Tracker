import {useState, useEffect} from 'react'
import axios from 'axios'



export default function WorkoutDisplay(props){
    const {handleClick, user}=props
    const [workouts, setWorkouts] = useState([])
    const workoutsArray = []
    const userWorkouts = user.workouts
    
        userWorkouts.map(async (workoutID)=>{
            const workout = await axios.get(`http://localhost:3001/api/workout/${workoutID}`)
            workoutsArray.push(workout.data.workout)
            setWorkouts(workoutsArray)
        })

    return(
        <div>
        <div className='workout workout-label'>
            <h2 id='workout-label'>WORKOUTS</h2>              
            <button className="add add-workout" onClick={handleClick}>+</button>
        </div>
        <div className='workout workout-label workouts-container'>

        </div>
        </div>
    )
}