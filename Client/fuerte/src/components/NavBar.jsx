import {useState, react} from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

export default function NavBar(props){
    const {handleClick, isToggled} = props


    return(
        <div id='nav-container'>
        <div className="nav-bar">
            <div className='fuerte-logo'>
                <img src='../logo/fuerte-logo.png'alt='fuerte-logo'/>
            </div>

        <div id='login-container' onClick={handleClick}>
        <div className='login-logo' >
            <div className='head'></div>
            <div className='body'></div>
        </div>
        <div id='login-label-container'><h4 id='login-label'>Login</h4></div>

        </div>

        </div>
        <div>
            {isToggled ? <Login handleClick={handleClick}/> : ''}
        </div>
        </div>
    )
}