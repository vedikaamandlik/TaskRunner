import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase, { storage , firestore } from '../Firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import './Admin.css';

const Admin = () => {

  return (
    <div className='admin-container'>
      <h1>Admin Dashboard</h1>
      <div className='button-container'>
      <h2>
          <Link to={`/admin-users`}>
            <img src="/images/users.png" alt={`Users`} />
          </Link>
      </h2>
      </div>
      <div className='button-container'>
      <h2>
          <Link to={`/admin-tasks`}>
            <img src="/images/tasks.png" alt={`Tasks`} />
          </Link>
      </h2>
      </div>
      <div className='button-container'>
      <h2>
          <Link to={`/admin-runners`}>
            <img src="/images/runners.png" alt={`Runners`} />
          </Link>
      </h2>
      </div>
    </div>
  );
};

export default Admin;
