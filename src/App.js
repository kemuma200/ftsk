import './App.css';
//import Home from './components/home';
import CountDownTimer from './components/countTimer';
import Footer from './components/footer';
import Final from './components/final';
import About from './components/about';
import Navbar from './components/navbar';
import Solutions from './components/solutions';


function App() {
  const THREE_DAYS_IN_MS = 300 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  console.log("hey");

  return (
    <div className="App">
      <div className="beforefourthsection">
      <CountDownTimer  targetDate={dateTimeAfterThreeDays}/>
      </div>
      <Navbar/>
      
      <Solutions/>

      <div className="footer">
        <Footer/>
        <Final/>
      </div>

    </div>
  );
}

export default App;
