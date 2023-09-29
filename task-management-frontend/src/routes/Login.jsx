import React from 'react'
import Navbar from '../components/Layout/Navbar'
import LoginForm from '../components/RegisterLogin/LoginForm'
import Footer from '../components/Layout/Footer';

function Login(){
  return (
    <>
        <Navbar/>
        <LoginForm/>
        <Footer/>
    </>
  )
}

export default Login;