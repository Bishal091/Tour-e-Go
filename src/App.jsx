
import './App.css';
import Home from './Navbar Links/Home';
import Service from './Navbar Links/Service';
import About from './Navbar Links/About';
import Contact from './Navbar Links/Contact';
import { Route,Routes } from "react-router-dom"
import Signup from './Navbar Links/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"element={ <Home/>}/>
        <Route path="/About"element={ <About/>}/>
        <Route path="/Service"element={ <Service/>}/>
        <Route path="/Contact"element={ <Contact/>}/>
        <Route path="/Signup"element={ <Signup/>}/>

       

      </Routes>
      
      
     
    </div>
  );
}

export default App;
