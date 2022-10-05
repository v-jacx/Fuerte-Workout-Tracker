import {useState} from 'react'
import axios from 'axios'



export default function WorkoutForm(props){
    const [workoutTitle, setWorkoutTitle] = useState('')
    const [isWorkoutActive, setIsWorkoutActive] = useState(true)
    const [workoutID, setWorkoutId] = useState('')
    const [inputData, setInputData]=useState([])
    const {user, setClicks} = props
    const userID = user._id

     const handleChange = (e)=>{
        if(e.target.placeholder === 'Workout Title'){
            setWorkoutTitle(e.target.value)
        }
     }

     const handleAdd =()=>{
        const array = [...inputData,[]]
        setInputData(array);
     }

     const handleExerciseChange = (e,index)=>{
        const array = [...inputData]
        array[index]=e.target.value
        setInputData(array)
     }

     const handleSubmit = async ()=>{
        if(isWorkoutActive===true){
       const res = await axios.post('https://j2e1hy2ao5.execute-api.us-east-1.amazonaws.com/latest/api/workout',{
        name: workoutTitle,
        userId: userID,
    })
    setWorkoutId(res.data._id)  
    const array =[...inputData, []]
    setInputData(array);
    setIsWorkoutActive(false)
}

}

const handleClick= async ()=>{
    if(isWorkoutActive===true){
        const res = await axios.post('https://j2e1hy2ao5.execute-api.us-east-1.amazonaws.com/latest/api/workout',{
         name: workoutTitle,
         userId: userID,
     })
     
     setWorkoutId(res.data._id)  
     const array =[...inputData, []]
     setInputData(array);
     setIsWorkoutActive(false)
    }else if(isWorkoutActive===false){
    inputData.map(async (data)=>{
        const res = await axios.post('https://fuerte-api.onrender.com/api/exercise',{
            name: data,
            workoutId: workoutID,
        })
    })
    setClicks()}
    reset()
}

const reset=()=>{
    setWorkoutTitle('')
    setIsWorkoutActive(true)
    setWorkoutId('')
    setInputData([])


}

    return(
        <div id = 'form'>
            <div className='form-container'>
                <div className='workout-title'>
                    <input  type="text" className='title' placeholder='Workout Title' value={workoutTitle} onChange={handleChange} id="workout-title" disabled={!isWorkoutActive}></input>
                    <button type="submit" className='add exercise-add' onClick={handleSubmit} id='workout-submit' style={{opacity: isWorkoutActive? 1:0, pointerEvents: isWorkoutActive? " ":"none"}} >+</button>
                    <button type="submit" className='add exercise-add' onClick={handleAdd} style={{opacity: isWorkoutActive? 0:1, pointerEvents: isWorkoutActive? "none":""}} >+</button>
                </div>
                <div className='exercise-container'>
                        {inputData.map((data, index)=>(
                    <input  type="text" className='title' placeholder='Exercise' onChange={e=> handleExerciseChange(e, index)} id="exercise-title"></input>
                        )
                        )}
                </div>
                <div className='submit-btn'>
                            <button type='submit' className="submit-form" onClick={handleClick}>Done</button>
                </div>
                </div>
        </div>
    )
}