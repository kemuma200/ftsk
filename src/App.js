import './App.css';
import Home from './components/home';
import CountDownTimer from './components/countTimer';


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
      <Home/>   
    </div>
  );
}

export default App;
