import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer';
import CompletedTasks from '../components/TaskManagement/CompletedTasks';

function Completed () {
    return (
      <>
      <Navbar/>
      <CompletedTasks/>
      <Footer/>
      </>
    )
  }

export default Completed;