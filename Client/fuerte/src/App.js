import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './components/Login'
import ExerciseView from './pages/ExerciseView' 

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
        <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/fuerte' element={<Home />}/>
            <Route path='/fuerte/:id' element={<ExerciseView/>}/>
          </Routes>

        </main>
    </div>
  );
}

export default App;
