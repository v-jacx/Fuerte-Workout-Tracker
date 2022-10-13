import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


export default function Signup(props){
const navigate = useNavigate()
const {setUser}=props
let currentUser = null;
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [isActive, setActive]=useState(false)
const handleChange = (e) =>{
    if(e.target.id === 'userName'){
        setName(e.target.value)
    }    if(e.target.id === 'email'){
        setEmail(e.target.value)
    }    if(e.target.id === 'password'){
        setPassword(e.target.value)
    }    if(e.target.id === 'confirm password'){
        setConfirmPassword(e.target.value)
    }
}

const handleClick=async(e)=>{
    e.preventDefault()
    if(password === confirmPassword){
            currentUser = await axios.post(`https://fuerte-api.onrender.com/api/signup`,{
            name: name,
            email: email,
            password: password,
        }
        )
        setUser(currentUser.data);
        navigate('/fuerte')
    }else{
        setActive(true)
    }
    
}

    return (
        <div className='center'>
        <div className='signup-container'>
            <form className="sign-up">
                <h4>Username</h4>
                <input type='text' id='userName' onChange={handleChange}></input>
                <h4>Email</h4>
                <input type='text' id='email' onChange={handleChange}></input>
                <h4>Password</h4>
                <input type='password' id='password' onChange={handleChange}></input>
                <h4>Confirm Password</h4>
                <input type='password' id='confirm password' onChange={handleChange}></input>
                <div style={{opacity: isActive? 1:0}}>Passwords need to match</div>
                <div><button id='signup-btn' onClick={handleClick}>Sign Up</button></div>
            </form>
        </div></div>
    )
}