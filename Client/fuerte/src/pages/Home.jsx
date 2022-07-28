import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutForm from "../components/WorkoutForm";
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Home(){
const [user, setUser]= useState()
const [isActive, setIsActive] = useState(false)
const userName = 'v-jacx'

const getUser = async () =>{
    const newUser = await axios.get(`http://localhost:3001/api/user?name=${userName}`)
    setUser(newUser.data.user[0])
    }    
    


useEffect(()=>{
    getUser()
},[])


const handleClick=()=>{
    setIsActive(true);
}

return (
    <div className='home'>
         <div className='workout-container'>
            <WorkoutDisplay handleClick={handleClick} user={user}/>
            </div>
        <div className="display workout-container">
            {isActive? <WorkoutForm user={user}/>:''}
        </div>
    </div>
);
}