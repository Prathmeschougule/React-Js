
import './App.css'

function App() {
  
//  console.log(process.env.REACT_APP_APPWRITE_URL); In react Application 

 console.log(import.meta.env.VITE_APPWRITE_URL); //in vite we accese the varibale  Like This 
 

  return (
    <>
      <h1>Hello </h1>
    </>
  )
}

export default App
 