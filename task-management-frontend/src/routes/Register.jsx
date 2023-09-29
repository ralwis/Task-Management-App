import React from 'react'
import Navbar from '../components/Layout/Navbar';
import RegisterForm from '../components/RegisterLogin/RegisterForm';
import Footer from '../components/Layout/Footer';

function Register(){
  return (
    <>
    <Navbar/>
    <RegisterForm/>
    <Footer/>
    </>
  )
}

export default Register;