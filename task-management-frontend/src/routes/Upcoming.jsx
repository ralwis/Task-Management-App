import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer';
import UpcomingTasks from '../components/TaskManagement/UpcomingTasks';

function Upcoming () {
  return (
    <>
    <Navbar/>
    <UpcomingTasks/>
    <Footer/>
    </>
  )
}

export default Upcoming;