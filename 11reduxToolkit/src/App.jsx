import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Componants/AddTodo'
import Todos from './Componants/Todo'

function App() {
 

  return (
    <>
      <div>
         <h1>Redux</h1>
      </div>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
