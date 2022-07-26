import React from 'react'
import axios from 'axios'


export default function WorkoutDisplay(props){
    const {handleClick}=props
    return(
            <div>
            <div className='workout workout-label'>
            <h2 id='workout-label'>WORKOUTS</h2>              
            <button className="add add-workout" onClick={handleClick}>+</button>
        </div></div>
    )
}