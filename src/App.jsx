import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home'
import ForgetPasswords from './Pages/ForgetPasswords'
import ResetPassword from './Pages/ResetPassword'

function App() {
 
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer />
    <Routes>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/forgetpassword' element={<ForgetPasswords/>}/>
      <Route path='/resetpassword/:id/:token' element={<ResetPassword/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
    </>
  )
}

export default App
