import {Routes , Route} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LobbyScreen from './screens/lobby'
import RoomPage from './screens/room'

function App() {


 
  return <div className='App'>

    <Routes>
      <Route path="/" element={<LobbyScreen/>}/>
      <Route path="/room/:roomId" element={<RoomPage/>}/>
    </Routes>
    
     
  </div>
}

export default App
