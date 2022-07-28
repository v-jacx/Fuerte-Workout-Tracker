import react from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <div className="nav-bar">
            <div className='fuerte-logo'>
                <img src='../logo/fuerte-logo.png'alt='fuerte-logo'/>
            </div>
        <Link to='/fuerte'>
            <div className='login-logo'>
            <div className='head'></div>
            <div className='body'></div>
        </div></Link>
        </div>
    )
}