import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'



export default function WorkoutDisplay(props){
    let navigate = useNavigate()
    const {handleClick, user}=props
    const [userWorkouts, setUserWorkouts]= useState([])
    const userID = user._id
    const userWorkoutIds = user.workouts

    const showWorkout = (workout)=>{
        navigate(`${workout.name}`,{state:{name: `${workout.name}`,id: `${workout._id}`}})
    }
    
    const getWorkouts = async ()=>{
        const workouts = await axios.get(`http://localhost:3001/api/workout/${userID}`)
        setUserWorkouts(workouts.data.userWorkouts)
    }
    
    useEffect(()=>{
        getWorkouts()
    },[userWorkoutIds])


    return(
        <div>
        <div className='workout workout-label'>
            <h2 id='workout-label'>WORKOUTS</h2>              
            <button className="add add-workout" onClick={handleClick}>+</button>
        </div>
        {userWorkouts.map((workout)=>(
            <div key={workout.name} className='workout workout-label workouts-container'>
                <h3 className='exercise' onClick={()=> showWorkout(workout)}>{workout.name}</h3>
            </div>  
        ))}
  
        </div>
    )
}