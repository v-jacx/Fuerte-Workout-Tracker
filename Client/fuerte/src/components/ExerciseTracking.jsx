import axios from 'axios'
import {useState, useEffect} from 'react'

export default function ExerciseTracking(props){
    const {exercise, setExercise} = props
    const [isActive, setIsActive]=useState(false)
    const [date, setDate]=useState('')
    const [setsAndReps, setSetsAndReps]=useState('')
    const [maxWeight, setMaxWeight]=useState('')
    const [PR, setPR]=useState('')
    const [info, setInfo]=useState([])

    console.log(exercise)

    const handleClick=()=> setIsActive(true)

    const handleChange=(e)=> {
       if(e.target.placeholder === 'Date'){
        setDate(e.target.value)
       }
       if(e.target.placeholder === 'Sets X Reps'){
        setSetsAndReps(e.target.value)
       }       
       if(e.target.placeholder === 'Max Weight'){
        setMaxWeight(e.target.value)
       }      
       if(e.target.placeholder === 'New PR'){
        setPR(e.target.value)
       }
    }

    const handleSave= async(e)=>{
        if(date !== ''&& setsAndReps !== ''&& maxWeight!== ''){
            const res = await axios.post(`https://fuerte-api.onrender.com/api/setInfo`,{
                date: date,
                sets_reps: setsAndReps,
                maxWeight: maxWeight,
                exerciseId: exercise._id,
            })   
        }
        if( PR !== ''){
            const res = await axios.put('https://fuerte-api.onrender.com/api/updatePR',{
                id: exercise._id,
                personalR: PR,
            })
            setExercise(res.data.exercise)
        }
        reset()
    }

    const reset = ()=>{
        setDate('')
        setSetsAndReps('')
        setMaxWeight('')
        setPR('')
    }

    const getInfo = async ()=>{
        const currentInfo = await axios.get(`https://fuerte-api.onrender.com/api/info/${exercise._id}`)
        setInfo(currentInfo.data.info)
    }

    
    useEffect(()=>{
        getInfo()
    },[exercise])

    return(
        <div>
            <div id='exercise-tracking-form'>
            <div id='exercise-title'>
                <h3 id='current-PR'>PR: {exercise.personalRecord}</h3>
                <h2 id='title'>{exercise.name}</h2>
                
                <input type='text' id='PR' placeholder="New PR" onChange={handleChange}></input>
            </div>

            <div id='info-bar'>
                <div className='tracking-labels date'>Date</div>
                <div className='tracking-labels set-reps'>Sets X Reps</div>
                <div className='tracking-labels max-weight'>Max Weight</div>
                <button className='add add-info' onClick={handleClick}>+</button>      
            </div>
                {info.map((elem)=>(
                    <div id='info-display'>
                        <div className='info-input' id='elem-date'>{elem.date}</div>
                        <div className='info-input'id='elem-sets-reps'>{elem.sets_reps}</div>
                        <div className='info-input' id='elem-maxWeight'>{elem.maxWeight}</div>
                    </div>
                ))}

            <div id='info-form' style={{opacity: isActive? 1:0}}>
                <input type='text' className="info-input" id='date' placeholder="Date" disabled={!isActive? true:false} onChange={handleChange}></input>
                <input type='text' className="info-input"  id='set-reps'placeholder="Sets X Reps" disabled={!isActive? true:false} onChange={handleChange}></input>
                <input type='text' className="info-input" id='max-weight' placeholder="Max Weight" disabled={!isActive? true:false} onChange={handleChange}></input>
            </div>
            <div className='submit-btn'>
                <button type='submit' className='submit-form' onClick={handleSave}>SAVE</button>
            </div>
            </div>
        </div>
    )
}