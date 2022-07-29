import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutForm from "../components/WorkoutForm";
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";


export default function Home(props){
const {user}=props
const [isActive, setIsActive] = useState(false)
const [clicks, setClicks ] = useState(0)

const handleClick=()=>{
    setIsActive(true);
}

const updateClicks =()=>setClicks(clicks+1)

return (
    <div className='home'>
         <div className='workout-container'>
            <WorkoutDisplay handleClick={handleClick} user={user} clicks={clicks}/>
            </div>
        <div className="display workout-container">
            {isActive? <WorkoutForm user={user} setClicks={updateClicks}/>:''}
        </div>
    </div>
);
}