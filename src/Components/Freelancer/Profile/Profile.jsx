import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Profile.css'

const Profile = () => {
    const [Profile, setProfile] = useState([]);

    // Function to decode JWT and extract the userID in a case-insensitive manner


    const GetProfile = async () => {

        try {
            const token = localStorage.getItem('user');
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const response = await axios.get(
                `https://localhost:7157/api/Freelancer/GetProfile`,
                // Request body is empty, assuming serviceDto is being sent from the client
                { headers: headers } // Pass headers as a separate object
            );
            
            console.log(response.data);
            setProfile(response.data)
           
            
        }
        catch (error) {
            console.error("Error fetching profile:", error);
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
        <div className="about" id="about">
            <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center my-5">
                <div className="box-div shadow bg-white d-flex align-items-center py-5">
                    <div className="container">
                        <div className='d-flex justify-content-end'>
                            <button type="button" class="btn mb-3 font-weight-bold profilebtn"><span>Edit Profile</span></button>
                        </div>
                        <div className='LineBelowDiv row'>
                        <div className="row row-cols-1 row-cols-md-2 mb-4">

                            <div className="pe-4 d-flex ">
                                <div>
                                    <div className="row justify-content-center ">
                                        <div className="col-sm-12 col-xl-4">
                                            <div className="imgdiv">
                                                <img src={require('../../../Images/unknown.webp')} className="rounded w-100" alt="Profile" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-xl-7 offset-xl-1">
                                            <div>
                                                <h4 className="font-weight-bold mb-3">{Profile.displayName}</h4>
                                                <p><span className="fs-5 lead">Title (software developer)</span></p>
                                                <p><span className="fs-5 lead">{Profile.experienceLevel}</span></p>
                                                <p><span className="fs-5 lead">{Profile.phoneNumber}</span></p>
                                                <p><span className="fs-5 lead">Ismailia, Egypt</span></p>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div className='col '>
                                <h4 className="font-weight-bold mb-3">About Me</h4>
                                <p className='lead'>A seasoned Software Developer, I specialize in crafting elegant solutions through code. With a Bachelor's degree in Computer Science and over five years of experience in the tech industry, my expertise spans a wide range of modern programming languages and frameworks</p>
                            </div>

                        </div>
                        </div>
                        <div className='LineBelowDiv row'>
                            <div className='mb-4'>
                                <h4 className="font-weight-bold mt-4 mb-3">Education</h4>
                                <h5 className="font-weight-bold mb-3">{Profile.education || 'Degree not available'}</h5>
                              
                            </div>
                        </div>

                        <div className='LineBelowDiv row'>
                            <h4 className="font-weight-bold mt-4 mb-4">Skills</h4>
                            <div className='buttonsDiv mb-5'>
                                <button type="button" class="pill-button me-3">Skills</button>
                                <button type="button" class="pill-button me-3">Skills</button>
                                <button type="button" class="pill-button me-3">Skills</button>
                                <button type="button" class="pill-button me-3">Skills</button>
                            </div>

                        </div>
                        <div className='LineBelowDiv row'>
                            <h4 className="font-weight-bold mt-4 mb-4">Service Categories Offered</h4>
                            <div className='buttonsDiv mb-5'>
                                <button type="button" class="pill-button me-3">Category</button>
                                <button type="button" class="pill-button me-3">Category</button>
                                <button type="button" class="pill-button me-3">Category</button>
                               
                            </div>

                        </div>
                        <div className='LineBelowDiv row'>
                            <h4 className="font-weight-bold mt-4 mb-4">Service SubCategories Offered</h4>
                            <div className='buttonsDiv mb-5'>
                                <button type="button" class="pill-button me-3">SubCategory</button>
                                <button type="button" class="pill-button me-3">SubCategory</button>
                                <button type="button" class="pill-button me-3">SubCategory</button>
                               
                            </div>

                        </div>
                        <div className='LineBelowDiv row'>
                            <h4 className="font-weight-bold mt-4 mb-4">Services Offered</h4>
                            <div className='buttonsDiv mb-5'>
                                <button type="button" class="pill-button me-3">service</button>
                                <button type="button" class="pill-button me-3">service</button>
                                <button type="button" class="pill-button me-3">service</button>
                               
                            </div>

                        </div>
                        <div className='LineBelowDiv row'>
                            <h4 className="font-weight-bold mt-4 mb-3">Reviews</h4>
                            <div className='Review mb-5'>

                            </div>

                        </div>
                        <div className=' row'>
                            <h4 className="font-weight-bold mt-4 mb-3">Proposals</h4>
                            <div className='Review mb-5'>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Profile;
