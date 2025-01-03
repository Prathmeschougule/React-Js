import { createContext , useContext , useEffect } from "react";
 
export const TodoContext=createContext({

    todos:[
        {
                id:1,
                todo:"Todo msg",
                completed: true,

                
        }
      
        
    ],

    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
})  

export const useTodo=()=>{
    return  useContext(TodoContext)
}

export const TodoProvider=  TodoContext.Provider
