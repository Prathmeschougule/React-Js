import { useState } from "react"

 

function App() {


  //
 const [color,setColor]=useState("#efeacb")

  return (
   <div className="w-full h-screen duration-200 "
   style={{backgroundColor:color}}
   >

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           <button className="outline-none px-5 rounded-full"
           style={{backgroundColor:"red",color:"white"}}
           onClick={()=>setColor("red")}
           >Red</button>
            <button className="outline-none px-5 rounded-full"
           style={{backgroundColor:"green",color:"white"}}
           onClick={()=>setColor("Green")}
           >Green</button>
            <button className="outline-none px-5 rounded-full"
           style={{backgroundColor:"#dd8a8a",color:"white"}}
           onClick={()=> setColor("#dd8a8a")}
           >Muscles</button>
            <button className="outline-none px-5 rounded-full"
           style={{backgroundColor:"#b2cdfb",color:"white"}}
           onClick={()=>setColor("#b2cdfb")}
           >Blue</button>
            <button className="outline-none px-5 rounded-full"
           style={{backgroundColor:"Lime",color:"white"}}
           onClick={()=>setColor("Lime")}
           >Lime</button>
            <button className="outline-none px-5 rounded-full"
           style={{backgroundColor:"#FFEFD5 ",color:"white"}}
           onClick={()=>setColor("#FFEFD5 ") }
           >Papaya Whip</button>
            <button className="outline-none px-5 rounded-full"
           style={{backgroundColor:"#c5afd3",color:"black"}}
           onClick={()=>setColor("#c5afd3")}
           >Red</button>
        </div>
    </div>
    
   </div>
  ) 
}

export default App
