import "./Profile.css";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        return () => {
            // Clean up the subscription when the component unmounts
            unsubscribe();
        };
    }, [auth]); // Make sure to include auth as a dependency

    if (!user) {
        // User is not yet fetched, return a loading indicator or null
        return null;
    }

    return (
        <div className="profile">
            <h3>Profile</h3>
            <div className="profile-info">
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
}

export default Profile;
