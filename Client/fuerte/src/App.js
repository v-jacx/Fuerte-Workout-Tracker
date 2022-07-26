import './App.css';
import NavBar from './components/NavBar'
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
    </div>
  );
}

export default App;
