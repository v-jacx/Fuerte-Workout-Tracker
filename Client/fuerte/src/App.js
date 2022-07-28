import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import NavBar from './components/NavBar'
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './components/Login'
import ExerciseView from './pages/ExerciseView' 
import Signup from './components/SignUp';

function App() {
  const [isToggled, setIsToggled] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const handleClick = (e) =>{
    setIsToggled(!isToggled)
  
  }


  return (
    <div className="App">
      <header>
        <NavBar handleClick={handleClick} isToggled={isToggled}/>
      </header>
        <main>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/fuerte' element={<Home />}/>
            <Route path='/fuerte/:id' element={<ExerciseView/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>

        </main>
    </div>
  );
}

export default App;
