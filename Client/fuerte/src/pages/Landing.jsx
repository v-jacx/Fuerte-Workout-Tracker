import react from 'react'
import NavBar from '../components/NavBar'

export default function Landing(props){
    const {handleClick, isToggled,setUser}=props
    return(
        <div>
        <header>
            <NavBar handleClick={handleClick} isToggled={isToggled} setUser={setUser}/>
        </header>
        <div className='landing'>
              <img className='large-logo 'src='../logo/fuerte-logo.png' alt='fuerte logo'/>
        </div>
        </div>
    )
}