import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutForm from "../components/WorkoutForm";
import {useState} from 'react'
export default function Home(){
const [isActive, setIsActive] = useState(false)

const handleClick=()=>{
    setIsActive(true);
}

return (
    <div className='home'>
         <div className='workout-container'>
            <WorkoutDisplay handleClick={handleClick}/>
            </div>
        <div className="display workout-container">
            {isActive? <WorkoutForm/>:''}
        </div>
    </div>
);
}