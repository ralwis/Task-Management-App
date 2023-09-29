import React from 'react';
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer';
import EditTask from '../components/TaskManagement/EditTask';

function Edit(){
  return (
    <>
    <Navbar/>
    <EditTask/>
    <Footer/>
    </>
  )
}

export default Edit