import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {

  const [documentUrls, setDocumentUrls] = useState([]);

  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home serviceData={serviceData} />} />
          <Route path="/admin" element={<Admin documentUrls={documentUrls} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/services" element={<Services serviceData={serviceData} />} />
          <Route path="/services/:category" element={<Category serviceData={serviceData} />} />
          <Route path="/booking/:serviceName" element={<Booking serviceData={serviceData} />} />
          <Route path="/task-runner-registration" element={<TaskRunnerRegistration setDocumentUrls={setDocumentUrls} />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-runners" element={<AdminRunners />} />
          <Route path="/admin-tasks" element={<AdminTasks />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/runner/:username" element={<Runner />} />
          <Route path="/runner-home" element={<RunnerHome />} />
        </Routes>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
