import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebase, { firestore } from '../Firebase';
import { v4 } from "uuid";
import './Signup.css';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const TaskRunnerRegistration = () => {
  const user = firebase.auth().currentUser;
  const [userData, setUserData] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [drivingFile, setDrivingFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showFileUpload,setShowFileUpload] =  useState(false)
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          console.error('User not found in Firestore');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);


  const allowedFileTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];

  const isValidFileType = (file) => {
    return allowedFileTypes.includes(file.type);
  };

  const handleFileChange = (e, setFile) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile && isValidFileType(selectedFile)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please upload a PDF, JPG, JPEG, or PNG file.');
    }
  };

  const uploadFilesToFirestore = async () => {
    try {
      if (!user) {
        setError('User not authenticated');
        return;
      }

    const existingRunnerDoc = await firestore.collection('runners').doc(user.uid).get();
      if (existingRunnerDoc.exists) {
        setError('You have already filled out the form.');
        return;
      }

      if (!aadharFile || !panFile || !drivingFile) {
        setError('Please select all files');
        return;
      }

      // Upload Aadhar Card
      const aadharRef = ref(storage, `aadharCard/${user.uid}`);
      await uploadBytes(aadharRef, aadharFile);

      const aadharDownloadURL = await getDownloadURL(aadharRef);

      // Similarly, upload PAN Card and Driving License
      const panRef = ref(storage, `panCard/${user.uid}`);
      await uploadBytes(panRef, panFile);

      const panDownloadURL = await getDownloadURL(panRef);

      const drivingRef = ref(storage, `drivingLicense/${user.uid}`);
      await uploadBytes(drivingRef, drivingFile);

      // Get download URL for Aadhar Card
      const drivingDownloadURL = await getDownloadURL(drivingRef);

      const status = "pending";
      const isActive = false;

      // Update Firestore collection 'runner' with user details and file URLs
      await firestore.collection('runners').doc(user.uid).set({
        name: userData.name,
        username: userData.username, // Replace with the actual user details you want to save
        gender: userData.gender,
        contact: userData.contact,
        email: userData.email,
        birthDate: userData.birthDate,
        documentLinks: {
          aadharCardUrl: aadharDownloadURL,
          panCardUrl: panDownloadURL,
          drivingLicenseUrl: drivingDownloadURL,
        },
        status,
        isActive
      });

      try {
        const userRef = firestore.collection('users').doc(user.uid);
    
        await userRef.update({
          role: 'runner',
        });
    
        console.log('User role updated to runner successfully!');
      } catch (error) {
        console.error('Error updating user role:', error);
      }

      setSuccessMessage('Registration successful!');
      setError(null);
    } catch (error) {
      setError('Error uploading files: ' + error.message);
      console.error('Error uploading files:', error);
    }
  };


  return (
    <div className="registration-container">
      <form className="registration-form">
        <h2>Legal Documents</h2>
        <div className="form-group">
          <label>Upload Aadhar Card:</label>
          <input type="file" onChange={(e) => handleFileChange(e, setAadharFile)} />
        </div>
        <div className="form-group">
          <label>Upload PAN Card:</label>
          <input type="file" onChange={(e) => handleFileChange(e, setPanFile)} />
        </div>
        <div className="form-group">
          <label>Upload Driving License:</label>
          <input type="file" onChange={(e) => handleFileChange(e, setDrivingFile)} />
        </div>
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button type="button" onClick={uploadFilesToFirestore}>
          Register
        </button>
        <div className="login-link">
          Already have an account? <Link to="/login">Log In!</Link>
        </div>
      </form>
    </div>
    
  );
};

export default TaskRunnerRegistration;