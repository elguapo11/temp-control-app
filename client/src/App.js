import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperaturevalue] = useState(10)
  const [temperatureColor, settemperatureColor] = useState("cold")
  
  const increaseTemperature = () => {
    if (temperatureValue === 30) return; 
    
    const newTemperature = temperatureValue +1; 
    if (newTemperature > 15) {
      settemperatureColor('hot'); 
    }
    
    setTemperaturevalue(newTemperature)
  } 


  const decreaseTemperature = () => {
    if (temperatureValue === 0) return; 
    const newTemperature = temperatureValue -1
    if (newTemperature < 15) {
      settemperatureColor('cold')
    }
    setTemperaturevalue(newTemperature)
  }


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
        </div>
         <div className="button-container">
           <button onClick={()=> increaseTemperature()}>+</button>
           <button onClick ={()=> decreaseTemperature()}>-</button>
          </div>
        </div>
  )
  }

  export default App; 