import ClockName from "./Components/ClockName";
import Description from "./Components/AppDesc";
import ClockDate from "./Components/ClockDate";
import "./App.css";

function App(){
  return <center className="clock-container">
    <ClockName></ClockName>
    <Description></Description>
    <div className="date-time">
      This is the current time:
    <ClockDate ></ClockDate>
    </div>
  </center>
}

export default App;