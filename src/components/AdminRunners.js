import React, { useState, useEffect } from 'react';
import { firestore } from '../Firebase';
import './AdminRunners.css';

const AdminRunners = () => {
  const [runners, setRunners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const runnersCollection = await firestore.collection('runners').get();
        const runnersData = runnersCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRunners(runnersData);
      } catch (error) {
        console.error('Error fetching runners data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleReject = async (runnerId) => {
    try {
      await firestore.collection('runners').doc(runnerId).update({ status: 'rejected' });
      const updatedRunnersCollection = await firestore.collection('runners').get();
      const updatedRunnersData = updatedRunnersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRunners(updatedRunnersData);
    } catch (error) {
      console.error('Error rejecting runner:', error);
    }
  };

  const handleVerify = async (runnerId) => {
    try {
      await firestore.collection('runners').doc(runnerId).update({ status: 'verified' });
      const updatedRunnersCollection = await firestore.collection('runners').get();
      const updatedRunnersData = updatedRunnersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRunners(updatedRunnersData);
    } catch (error) {
      console.error('Error verifying runner:', error);
    }
  };

  const renderRunnersByStatus = (status) => {
    const filteredRunners = runners.filter((runner) => runner.status === status);

    return (
      <div key={status}>
        <h2>{status.toUpperCase()}</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Aadhar Card</th>
              <th>PAN Card</th>
              <th>Driving License</th>
              <th>Active</th>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            {filteredRunners.map((runner) => (
              <tr key={runner.id}>
                <td>{runner.name}</td>
                <td>{runner.username}</td>
                <td>{runner.email}</td>
                <td>{runner.birthDate}</td>
                <td>{runner.gender}</td>
                <td>{runner.contact}</td>
                <td>
                  {runner.documentLinks && runner.documentLinks.aadharCardUrl && (
                    <a href={runner.documentLinks.aadharCardUrl} target="_blank" rel="noopener noreferrer">
                      View Aadhar Card
                    </a>
                  )}
                </td>
                <td>
                  {runner.documentLinks && runner.documentLinks.panCardUrl && (
                    <a href={runner.documentLinks.panCardUrl} target="_blank" rel="noopener noreferrer">
                      View PAN Card
                    </a>
                  )}
                </td>
                <td>
                  {runner.documentLinks && runner.documentLinks.drivingLicenseUrl && (
                    <a href={runner.documentLinks.drivingLicenseUrl} target="_blank" rel="noopener noreferrer">
                      View Driving License
                    </a>
                  )}
                </td>
                {runner.isActive ? <td>Yes</td>:<td>No</td>}
                {/*<td>
                  {runner.categories.map((category, index) =>(
                    <div>
                      {category}
                    </div>
                  ))}
                  </td>*/}
                <td>
                  <button onClick={() => handleVerify(runner.id)}>Verify</button>
                  <button onClick={() => handleReject(runner.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <h1>Runner Management</h1>

      {runners.length === 0 && <p>Loading runners...</p>}

      {runners.length > 0 && (
        <>
          {renderRunnersByStatus('pending')}
          {renderRunnersByStatus('verified')}
          {renderRunnersByStatus('rejected')}
        </>
      )}
    </div>
  );
};

export default AdminRunners;
