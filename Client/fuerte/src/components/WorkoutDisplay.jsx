import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'



export default function WorkoutDisplay(props){
    let navigate = useNavigate()
    const {handleClick, user, clicks}=props
    const [userWorkouts, setUserWorkouts]= useState([])
    const userID = user._id


    const showWorkout = (workout)=>{
        navigate(`${workout.name}`,{state:{name: `${workout.name}`,id: `${workout._id}`,user: `${user}`}})
    }
    
    const getWorkouts = async ()=>{
        const workouts = await axios.get(`https://j2e1hy2ao5.execute-api.us-east-1.amazonaws.com/latest/api/${userID}`)
        setUserWorkouts(workouts.data.userWorkouts)
    }
    
    useEffect(()=>{
        getWorkouts()
    },[clicks])


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