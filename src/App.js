import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Services from './components/Services';
import Category from './components/Category';
import Booking from './components/Booking';
import serviceData from './components/serviceData';
import TaskRunnerRegistration from './components/TaskRunnerRegistration';
import Admin from './components/Admin';
import AdminUsers from './components/AdminUsers';
import AdminRunners from './components/AdminRunners';
import AdminTasks from './components/AdminTasks';
import Profile from './components/Profile';
import Runner from './components/Runner';
import RunnerHome from './components/RunnerHome';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import firebase, { firestore } from './Firebase';
import TaskBot from './components/TaskBot';

function App() {
  const [profileData, setProfileData] = useState(null);
  const user = firebase.auth().currentUser;
  //const userID = user.uid;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          setProfileData(userDoc.data());
        } else {
          console.error('User not found in Firestore');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
      }
    };

    if (user) {
      fetchProfileData();
    }
  }, [user]);


  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home serviceData={serviceData} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-runners" element={<AdminRunners />} />
          <Route path="/admin-tasks" element={<AdminTasks />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/services" element={<Services serviceData={serviceData} />} />
          <Route path="/services/:category" element={<Category serviceData={serviceData} />} />
          <Route path="/booking/:serviceName" element={<Booking serviceData={serviceData} />} />
          <Route path="/task-runner-registration" element={<TaskRunnerRegistration />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/runner/:username" element={<Runner />} />
          <Route path="/runner-home" element={<RunnerHome />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <TaskBot />
        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
