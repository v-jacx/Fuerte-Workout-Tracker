import {useState, useEffect} from 'react'
import axios from 'axios'



export default function WorkoutDisplay(props){
    const {handleClick, user}=props
    const [userWorkouts, setUserWorkouts]= useState([])
    const userID = user._id

    const getWorkouts = async ()=>{
        const workouts = await axios.get(`http://localhost:3001/api/workout/${userID}`)
        setUserWorkouts(workouts.data.userWorkouts)
    }
    
    useEffect(()=>{
        getWorkouts()
    },[userID])

    console.log(userWorkouts)
    return(
        <div>
        <div className='workout workout-label'>
            <h2 id='workout-label'>WORKOUTS</h2>              
            <button className="add add-workout" onClick={handleClick}>+</button>
        </div>
        {userWorkouts.map((workout)=>(
            <div key={workout.name} className='workout workout-label workouts-container'>
                <h3 className='exercise'>{workout.name}</h3>
            </div>  
        ))}
  
        </div>
    )
}