import React from 'react'
import axios from 'axios'

export default function WorkoutForm(){
    return(
        <div className='form-container'>
            <div className='workout-title'>
                <input className='title' type="text" placeholder='Workout Title'></input>
                <div className='add exercise-add'>+</div>
            </div>
        </div>
    )
}