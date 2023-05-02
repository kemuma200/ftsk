import Home from './components/home';
import CountDownTimer from './components/countTimer';
import Footer from './components/footer';
import Final from './components/final';
import About from './components/about';
import Navbar from './components/navbar';
import Solutions from './components/solutions';
import Contact from './components/contact';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  

  return (
    <div className="App">
      
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" index element={<About />} />
    <Route path="/contacts" index element={<Contact />} />
    <Route path="/solutions" index element={<Solutions />} />
    
    </Routes>
    </BrowserRouter>
   
     
      


    </div>
  );
}

export default App;
