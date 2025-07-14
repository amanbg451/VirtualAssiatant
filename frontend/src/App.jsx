import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import React, { useContext } from 'react'
import Customize from './pages/Customize'
import Customize2 from './pages/Customize2'
import { UserDataContext } from './context/userContext'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const { userData, setUserData } = useContext(UserDataContext)
  return (
    <>
      <Routes>
        <Route path="/" element={(userData?.assistantImage && userData?.assistantName) ? <Home /> : <Navigate to={"/customize"} />} />
        <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to={"/"} />} />
        <Route path="/signin" element={!userData ? <SignIn /> : <Navigate to={"/"} />} />
        <Route path="/customize" element={userData ? <Customize /> : <Navigate to={"/signin"} />} />
        <Route path="/customize2" element={userData ? <Customize2 /> : <Navigate to={"/signin"} />} />

      </Routes>
    </>
  )
}

export default App