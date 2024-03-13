import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ClientMainPage = () => {
    const [posts, setPosts] = useState([]);

    // Function to decode JWT and extract the userID in a case-insensitive manner
    const decodeToken = (token) => {
        try {
            const base64Url = token.split('.')[1]; // Payload part
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            const payload = JSON.parse(jsonPayload);
            console.log("Decoded JSON payload:", jsonPayload); // Log the decoded JSON string
            console.log("Payload object:", payload); // Log the payload object

            return payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
        } catch (error) {
            console.error("Error decoding token:", error);
            return null;
        }
    };

    const fetchPosts = async () => {
        console.log('hello');
        const token = localStorage.getItem('user');
        if (!token) {
            console.error("No token found");
            //return;
        }

        const EmailAddress = decodeToken(token);
        if (!EmailAddress) {
            console.error("Invalid token or userID not found in token");
            //return;
        }

        try {
            const headers = {
                Authorization: `Bearer ${token}`
            };
        
            const response2= await axios.get(
                `https://localhost:7157/api/Posting/GetAllServicePostings?EmailAddress=${EmailAddress}`,
                 // Request body is empty, assuming serviceDto is being sent from the client
                { headers:headers } // Pass headers as a separate object
            );
            console.log(response2.data);
            setPosts(response2.data)


            /*const response = await fetch(`https://localhost:7157/api/Posting/GetAllServicePostings?EmailAddress=${EmailAddress}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }*/
           
            //const data = await response2.json();
            //setPosts(data);
        }
         catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        try {
            fetchPosts();
        } catch (error) {
            console.log('failed to fetch');
        }
    }, []);

    return (
        <div className='mainpage'>
            
            <div className='container'>
                <div className='AboveBlock'>
                    <div className="left">
                        <h2>Welcome (Name), Let's start and post a job</h2>
                      
                        <button>Post a job</button>
                    </div>
                    <div className="right">
                       
                        <img src={require('../../Images/Picture1.png')} alt="Image" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='BelowBlock'>
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <div key={index} className="post">
                                {/* Post content */}
                                {/*<img className="post-image" src={post.image || 'default-image.jpg'} alt="Client" />*/}
                                <div className="post-content">
                                    <div className="post-title">{post.title}</div>
                                    <div className="post-description">Description: {post.description}</div> {/* Adjusted from Posted on to Deadline */}
                                     {/* Now using budget; ensure it's not null before calling toFixed */}
                                    
                                    {/* Since 'skills' and 'location' aren't in your API response, either remove these or handle their absence appropriately */}
                                    {/* <div className="post-skills">Skills: {post.skills?.join(', ')}</div> */}
                                    {/* <div className="post-location">Location: {post.location}</div> */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No posts found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientMainPage;
