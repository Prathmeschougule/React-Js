
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login/Login'
import Profile from './Component/Profile/Profile'

function App() {
  

  return (
    <UserContextProvider>
        <h1 className='text-blue-700 mb-4 font-bold'>React With Chai </h1>
        <h1 className='text-cyan-500 text-3xl font-semibold bg-black rounded-xl p-3' > Login Your System </h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
