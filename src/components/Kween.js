import React, { useEffect, useState } from "react";
import { authh } from "../Firebase";

const Kween = () => {
    const user = authh.currentUser;
    const [userID, setUserID] = useState(null);

    useEffect(() => {
        const unsubscribe = authh.onAuthStateChanged((user) => {
            setUserID(user ? user.uid : null);
        });

        return () => unsubscribe();
    }, []);

    console.log(userID);

    return (
        <div>
            <p>Current User ID: {userID}</p>
        </div>
    );
};

export default Kween;
