import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutForm from "../components/WorkoutForm";
import Nav from '../components/Nav'
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
    <div>  
        <header>
            <Nav user={user}/>
        </header>
        <div className='home'>
            <div className='workout-container'>
                <WorkoutDisplay handleClick={handleClick} user={user} clicks={clicks}/>
                {isActive? <WorkoutForm user={user} setClicks={updateClicks}/>:''}
            </div>
        </div>
    </div>
);
}