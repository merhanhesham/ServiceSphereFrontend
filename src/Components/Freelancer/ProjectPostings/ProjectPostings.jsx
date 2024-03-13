import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProjectPostings = () => {
    const [posts, setPosts] = useState([]);

    // Function to decode JWT and extract the userID in a case-insensitive manner
   

    const fetchPosts = async () => {

        try {
            /*const headers = {
                Authorization: `Bearer ${token}`
            };*/

            const Projectsresponse= await axios.get(
                `https://localhost:7157/api/Posting/ProjectPostings`,
                 // Request body is empty, assuming serviceDto is being sent from the client
                //{ headers:headers } // Pass headers as a separate object
            );
            console.log(Projectsresponse.data);
            setPosts(Projectsresponse.data)

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

export default ProjectPostings;
