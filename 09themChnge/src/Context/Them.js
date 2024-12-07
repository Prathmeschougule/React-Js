import { useContext,createContext } from "react";

// in thisCreate Context We pass the method and class
export const ThemeContext=createContext({
    themeMode: "light",
    darkThem:()=>{},
    lightThem:()=>{}
})  

export const ThemeProvider=  ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}