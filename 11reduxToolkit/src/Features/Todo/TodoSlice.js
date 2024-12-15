import{ createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[
        {id:1, name:"Hello Word"}
    ]
}

export const todoSlice=createSlice({

    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{   
            const todo={

                id:nanoid(), 
                // user can pass the todo doto is the Text So we can write playload.text
                // name:action.payload.text

                // We can  write also this 
                text:action.payload
            }
             state.todos.push(todo)
        },

        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
             // Expecting an object {id, newText}
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                // Update the text property of the matched todo
                todoToUpdate.text = newText; 
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
