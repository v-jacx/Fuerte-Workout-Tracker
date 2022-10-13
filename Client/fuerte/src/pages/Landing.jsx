import react from 'react'
import NavBar from '../components/NavBar'

import Login from '../components/Login'

export default function Landing(props){
    const {handleClick, isToggled,setUser}=props
    return(
        <div>
        <header>
            <NavBar handleClick={handleClick} setUser={setUser}/>
            {isToggled ? <Login handleClick={handleClick} setUser={setUser}/> : ''}
        </header>
        <div className='landing'>
              <img className='large-logo 'src='../logo/fuerte-logo.GIF' alt='fuerte logo'/>
        </div>
        </div>
    )
}