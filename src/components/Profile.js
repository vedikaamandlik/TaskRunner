import React, { useEffect, useState } from 'react';
import firebase, { firestore } from '../Firebase';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const user = firebase.auth().currentUser;

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
      await firestore.collection('users').doc(user.uid).update(updatedProfile);
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
    <div className="profile-container">
      <h2 className="profile-heading">Your Profile</h2>
      {profileData && !editMode ? (
        <div className="profile-section">
          <p>Username: {profileData.username}</p>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Phone No.: {profileData.contact}</p>
          <p>Birth Date: {profileData.birthDate}</p>
          <p>Gender: {profileData.gender}</p>
          <button className="profile-button" onClick={handleEdit}>Edit Profile</button>
        </div>
      ) : (
        <div className="profile-section">
          <label className="profile-label">
            Username:
            <input
              className="profile-input"
              type="text"
              name="username"
              value={updatedProfile.username || ''}
              onChange={handleChange}
            />
          </label>
          <label className="profile-label">
            Name:
            <input
              className="profile-input"
              type="text"
              name="name"
              value={updatedProfile.name || ''}
              onChange={handleChange}
            />
          </label>
          <label className="profile-label">
            Email:
            <input
              className="profile-input"
              type="email"
              name="email"
              value={updatedProfile.email || ''}
              onChange={handleChange}
            />
          </label>
          <label className="profile-label">
            Phone No.:
            <input
              className="profile-input"
              type="text"
              name="contact"
              value={updatedProfile.contact || ''}
              onChange={handleChange}
            />
          </label>
          <label className="profile-label">
            Birth Date:
            <input
              className="profile-input"
              type="date"
              name="birthDate"
              value={updatedProfile.birthDate || ''}
              onChange={handleChange}
            />
          </label>
          <label className="profile-label">
            Gender:
            <select name="gender" value={updatedProfile.gender || ''} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button className="profile-button" onClick={handleSaveEdit}>Save</button>
          <button className="profile-button" onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
