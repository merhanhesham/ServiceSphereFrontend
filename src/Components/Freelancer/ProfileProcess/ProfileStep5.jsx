import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProfileSteps.css';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const ProfileStep5 = () => {



    return (
        <div className="ProfileStepMain" id="ProfileStepMain">
            <div className="w-100 d-flex justify-content-center align-items-center my-5 py-5">
                <div className="box-div bg-white d-flex align-items-center py-5 rounded-5 justify-content-center">

                    <div className="container row">
                        <h3 className='py-5 fw-normal' >5/5</h3>

                        <h2 ><span className='p-2'><FaCircle size={10} /></span>A few last details, and your profile is complete <FaCheckCircle size={40} className='m-3 pb-1' /></h2>
                        <h4 className='ps-4 lead mb-5'>Polishing the finishing touches before unveiling. Ready to review, approve, and showcase your profile to the world.</h4>

                        <div className='col-md-3  d-flex flex-column gap-4 align-items-center'>

                            <div className="imgdiv">
                                <img src={require('../../../Images/unknown.webp')} style={{ border: '2px solid #a855f7' }} className="rounded-circle" alt="Profile" />
                            </div>

                        </div>
                        <div className='col-md-8 offset-md-1 d-flex flex-column gap-2 '>
                            <h4 className='ps-4 lead' >Street Address</h4>
                            <div className="form-group ps-4 ">
                                <input name="street" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 rounded-3" placeholder="Enter your street address" />
                            </div>
                            <h4 className='ps-4 lead'>Country</h4>
                            <div className="form-group ps-4 ">
                                <input name="country" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 rounded-3" placeholder="Enter service price offered" />
                            </div>
                            <h4 className='ps-4 lead'>City</h4>
                            <div className="form-group ps-4 ">
                                <input name="city" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 bio rounded-3" placeholder="City" />
                            </div>
                            <h4 className='ps-4 lead'>Zip Code</h4>
                            <div className="form-group ps-4 ">
                                <input name="zipcode" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 rounded-3" placeholder="Zipcode, e.g., 12345 or 12345-6789" />
                            </div>
                            <h4 className='ps-4 lead'>Location</h4>
                            <div className="form-group ps-4 ">
                                <input name="location" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 rounded-3" placeholder="Location extra details" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button class="learn-more-btn mt-4 w-50">
                                Save Address
                                <span class="price"></span>
                            </button>
                        </div>
                        <div className='d-flex justify-content-between mt-5'>
                            <div >
                                <Link to="/profileStep4"><button type="button" className="btn mb-3 font-weight-bold profilebtn rounded-3 px-5"><span>Back</span></button></Link>
                            </div>

                            <div >
                                <Link to="/profile"><button type="button" className="btn mb-3 font-weight-bold profilebtn rounded-3 px-5"><span>View Your Profile</span></button></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileStep5;
