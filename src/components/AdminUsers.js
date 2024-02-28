import React, { useState, useEffect } from 'react';
import firebase, { storage, firestore } from '../Firebase';
import './AdminUsers.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Add a query to filter users by role: 'user'
        const usersSnapshot = await firestore.collection('users').where('role', '==', 'user').get();

        const usersData = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.birthDate}</td>
              <td>{user.gender}</td>
              <td>{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
