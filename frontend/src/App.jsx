import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
       <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/doctors'element={<Doctor/>}/>
        <Route path='/doctors/:speciality'element={<Doctor />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/my-profile'element={<Myprofile />}/>
        <Route path='/my-appointments'element={<MyAppointment/>}/>
        <Route path='/appointment/:docId'element={<Appointment />}/> 
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App