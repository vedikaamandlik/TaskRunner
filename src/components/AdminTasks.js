import React, { useState, useEffect } from 'react';

const AdminTasks = () => {
  // Sample user data for demonstration purposes
  const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more user data as needed
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch or set your user data here
    setUsers(sampleUsers);
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Task Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTasks;
