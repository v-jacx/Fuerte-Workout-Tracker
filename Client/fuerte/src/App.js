import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './components/Login'
import ExerciseView from './pages/ExerciseView' 
import Signup from './components/SignUp';


function App() {
  const [isToggled, setIsToggled] = useState(false)
  const [active, setActive]=useState(false)
  const [user, setUser]=useState();
  let home;
  const handleClick = (e) =>{
    setIsToggled(!isToggled)
  
  }

  const setAUser = (sentUser)=>setUser(sentUser)
  

  return (
    <div className="App">

        <main>

          <Routes>
            <Route path='/' element={<Landing handleClick={handleClick} isToggled={isToggled} setUser={setAUser}/>} />
            <Route path='/fuerte' element={<Home user={user}/>}/>
            <Route path='/fuerte/:id' element={<ExerciseView/>}/>
            <Route path='/signup' element={<Signup setUser={setAUser}/>}/>
          </Routes>

        </main>
    </div>
  );
}

export default App;
