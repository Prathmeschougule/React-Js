
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Them";
import { useEffect } from "react";
import ThemeBtn from "./Componant/ThemeBtn";
import Card from "./Componant/Card";

function App() {
const [themeMode,setThemeMode]=useState("light")

const darkThem=()=>{
  setThemeMode("dark")
}
const lightThem=()=>{
  setThemeMode("light")
}

useEffect(() => {
  document.querySelector(`html`).classList.remove("light","dark")
  document.querySelector(`html`).classList.add(themeMode)
}, [themeMode])


  return (
    <ThemeProvider value={{themeMode,darkThem,lightThem}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme Btn */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card */}
         <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
