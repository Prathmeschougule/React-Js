import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)





let[counter,Setcounter]=useState(0);

//  let counter=5;


 // Write A function 
 const addValue =()=>{
  
  counter=counter+1;
  Setcounter(counter);
  

}

const removeValue=()=>{

  counter=counter -1;
   Setcounter(counter);
}



  return (
    <>
      
      <h1>chai or React</h1>
      <h2>Counter Value:{counter}</h2>
      <button 

      // write a  method 
      onClick={addValue}
      
      >Add value</button> <br /><br />
      <button
      
      onClick={removeValue}
      
      >Remove Value </button>
    </>
  )
}

export default App
