import React, { useEffect, useState } from 'react';
import firebase, { firestore, storage } from '../Firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import './Runner.css';

const Runner = () => {
  const [profileData, setProfileData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const user = firebase.auth().currentUser;
  const [aadharUrl, setAadharUrl] = useState(null);
  const [panUrl, setPanUrl] = useState(null);
  const [drivingUrl, setDrivingUrl] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userDoc = await firestore.collection('runners').doc(user.uid).get();
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

  useEffect(() => {
    const fetchFileUrls = async () => {
      const aadharRef = ref(storage, `aadharCard/${user.uid}`);
      const panRef = ref(storage, `panCard/${user.uid}`);
      const drivingRef = ref(storage, `drivingLicense/${user.uid}`);

      try {
        const aadharDownloadUrl = await getDownloadURL(aadharRef);
        setAadharUrl(aadharDownloadUrl);
      } catch (aadharError) {
        console.error('Error fetching Aadhar URL:', aadharError);
      }

      try {
        const panDownloadUrl = await getDownloadURL(panRef);
        setPanUrl(panDownloadUrl);
      } catch (panError) {
        console.error('Error fetching PAN URL:', panError);
      }

        try {
          const drivingDownloadUrl = await getDownloadURL(drivingRef);
          setDrivingUrl(drivingDownloadUrl);
        } catch (drivingError) {
          console.error('Error fetching Driving License URL:', drivingError);
        }
    };

    if (user) {
      fetchFileUrls();
    }
  }, [user]);

  const handleEdit = () => {
    setEditMode(true);
    setUpdatedProfile({ ...profileData });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setUpdatedProfile({});
  };

  const handleSaveEdit = async () => {
    try {
      await firestore.collection('runners').doc(user.uid).update(updatedProfile);
      setProfileData(updatedProfile);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile data:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  return (
    <div className="runner-container">
      <h2 className="runner-heading">Your Profile</h2>
      {profileData && !editMode ? (
        <div className="runner-section">
          <p>Username: {profileData.username}</p>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Phone No.: {profileData.contact}</p>
          <p>Birth Date: {profileData.birthDate}</p>
          <p>Gender: {profileData.gender}</p>
          <button className="runner-button" onClick={handleEdit}>Edit Profile</button>
        </div>
      ) : (
        <div className="runner-section">
          <label className="runner-label">
            Username:
            <input
              className="runner-input"
              type="text"
              name="username"
              value={updatedProfile.username || ''}
              onChange={handleChange}
            />
          </label>
          <label className="runner-label">
            Name:
            <input
              className="runner-input"
              type="text"
              name="name"
              value={updatedProfile.name || ''}
              onChange={handleChange}
            />
          </label>
          <label className="runner-label">
            Email:
            <input
              className="runner-input"
              type="email"
              name="email"
              value={updatedProfile.email || ''}
              onChange={handleChange}
            />
          </label>
          <label className="runner-label">
            Phone No.:
            <input
              className="runner-input"
              type="text"
              name="contact"
              value={updatedProfile.contact || ''}
              onChange={handleChange}
            />
          </label>
          <label className="runner-label">
            Birth Date:
            <input
              className="runner-input"
              type="date"
              name="birthDate"
              value={updatedProfile.birthDate || ''}
              onChange={handleChange}
            />
          </label>
          <label className="runner-label">
            Gender:
            <select className="runner-input" name="gender" value={updatedProfile.gender || ''} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button className="runner-button" onClick={handleSaveEdit}>Save</button>
          <button className="runner-button" onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}

      <h2 className="runner-heading">Your Files</h2>
      <div className="file-display">
        <p>Aadhar Card:</p>
        {aadharUrl ? (
          <a className="runner-link" href={aadharUrl} target="_blank" rel="noopener noreferrer">
            View Aadhar Card
          </a>
        ) : (
          <p>No Aadhar Card uploaded</p>
        )}

        <p>PAN Card:</p>
        {panUrl ? (
          <a className="runner-link" href={panUrl} target="_blank" rel="noopener noreferrer">
            View PAN Card
          </a>
        ) : (
          <p>No PAN Card uploaded</p>
        )}

        <p>Driving License:</p>
        {drivingUrl ? (
          <a className="runner-link" href={drivingUrl} target="_blank" rel="noopener noreferrer">
            View Driving License
          </a>
        ) : (
          <p>No Driving License uploaded</p>
        )}
      </div>
    </div>
  );
};

export default Runner;