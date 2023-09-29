import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <DashboardLayout/>
    <Footer/>
    </>
  )
}

export default Dashboard