import { useState } from "react";
import "./style.css"; // Import the CSS file
 import Heading from "./Heading";
import ParticleRing from "./ParticleRing";
import Button from "./Button";
export default function App() {
  const [advice, setAdvice] = useState("What are you waiting for?!");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
  }

  return (
    <div>
        <ParticleRing /> 
        
      <div className="quote-container">
      <Heading /> 
      
      <div className="quote">
      <h1> {advice}</h1>
      <button className = "button-hide"onClick={getAdvice}> <Button /> </button>
      </div>
    </div>
    <h1 className="drag-screen">drag here
    </h1>
    </div> 
  );
}