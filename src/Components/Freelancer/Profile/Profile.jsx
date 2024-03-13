import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [Profile, setProfile] = useState([]);

    // Function to decode JWT and extract the userID in a case-insensitive manner
   

    const GetProfile = async () => {

        try {
            const token = localStorage.getItem('user');
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const profile= await axios.get(
                `https://localhost:7157/api/Freelancer/GetProfile`,
                 // Request body is empty, assuming serviceDto is being sent from the client
                { headers:headers } // Pass headers as a separate object
            );
            console.log(profile.data);
            setProfile(profile.data)
        }
         catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        try {
            GetProfile();
        } catch (error) {
            console.log('failed to fetch');
        }
    }, []);

    return (
       <h2>hello</h2>
                       
                     
        
    );
};

export default Profile;
