import React, { useEffect, useLayoutEffect, useState } from "react";
import firebase, { firestore, auth, authh } from "../Firebase";
import Switch from "react-switch";
import "./RunnerHome.css";

const categoriesList = [
  "Shopping And Delivery",
  "Pet Care",
  "Cleaning Services",
  "Moving Services",
  "Baby Prep",
  "Virtual And Online Tasks",
];

const RunnerHome = () => {
  const [isActive, setIsActive] = useState(false);
  const [userID, setUserID] = useState(null);
  const user = firebase.auth().currentUser;
  const [categories, setCategories] = useState({
    shoppingAndDelivery: false,
    petCare: false,
    cleaningServices: false,
    movingServices: false,
    babyPrep: false,
    virtualAndOnlineTasks: false,
  });

  const fetchAvailability = async () => {
    try {
      const runnerRef = firestore.collection("runners").doc(user.uid);

      runnerRef.get().then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setIsActive(data.isActive);
          setCategories(data.categories || {});
        }
      });
    } catch (error) {
      console.error("Error fetching availability:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = authh.onAuthStateChanged((user) => {
        setUserID(user ? user.uid : null);
        fetchAvailability();
    });

    return () => unsubscribe();
}, []);


  const handleToggleAvailability = async () => {
    try {
      const runnerRef = firestore.collection("runners").doc(userID);
      runnerRef.update({
        isActive: !isActive,
        categories,
      });
      setIsActive(!isActive);
    } catch (error) {
      console.error("Error updating availability:", error.message);
    }
  };

  const handleCategoryChange = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  return (
    <div className="runner-home-container">
      <h2>Runner Home</h2>

      <div className="availability-section">
        <h3>Availability</h3>
        <p className="availability-status">
          Status: {isActive ? "Available" : "Not Available"}
        </p>
        <label className="toggle-label">
          Toggle Availability:
          <Switch onChange={handleToggleAvailability} checked={isActive} />
        </label>
      </div>

      <div className="categories-section">
        <h2>Categories</h2>
        {categoriesList.map((category) => (
          <div key={category}>
            <input
              className="category-checkbox"
              type="checkbox"
              id={category}
              checked={categories[category]}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunnerHome;