import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function NavBar(props){
const {user} = props
const navigate = useNavigate()

const handleClick = async () =>{
    await axios.put(`http://localhost:3001/api/signout/${user._id}`).then(navigate('/'))

}

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
        <div id='login-label-container'><h4 id='login-label'>Sign Out</h4></div>
        </div></div></div>
)
}