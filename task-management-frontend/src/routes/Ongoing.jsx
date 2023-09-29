import React from 'react'
import Navbar from '../components/Layout/Navbar'
import OngoingTasks from '../components/TaskManagement/OngoingTasks';
import Footer from '../components/Layout/Footer';

function Ongoing () {
  return (
    <>
    <Navbar/>
    <OngoingTasks/>
    <Footer/>
    </>
  )
}

export default Ongoing;