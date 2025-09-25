import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<Captainlogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/> } />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
          } />

        <Route 
          path='/user/logout' element={<UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>}
        />

      </Routes>
    </div>
  )
}

export default App