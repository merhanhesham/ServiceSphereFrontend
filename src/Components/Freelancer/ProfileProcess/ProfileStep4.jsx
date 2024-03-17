import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProfileSteps.css';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';

const ProfileStep4 = () => {



    return (
        <div className="ProfileStepMain" id="ProfileStepMain">
            <div className="w-100 d-flex justify-content-center align-items-center my-5 py-5">
                <div className="box-div bg-white d-flex align-items-center py-5 rounded-5 justify-content-center">

                    <div className="container row">
                        <h3 className='py-5 fw-normal' >4/5</h3>

                        <div className='col-md-9  d-flex flex-column gap-2'>
                            <h2 className='mb-5'><span className='p-2'><FaCircle size={10} /></span>What are the main services you offer? <MdOutlineMiscellaneousServices size={60} className='pb-1' /></h2>

                            <h4 className='ps-4 lead' >Select the service category</h4>

                            <div className="form-group ps-4 ">
                                <select name="ServiceCategory" className="form-control p-3 rounded-3" style={{ backgroundColor: '#E0E0E0', color: '#999' }} >
                                    <option value="" >Select your service category</option>
                                    <option value="Construction & Renovation" style={{ color: 'black', backgroundColor: 'White' }}>Construction & Renovation</option>
                                    <option value="Event Planning" style={{ color: 'black', backgroundColor: 'White' }}>Event Planning</option>
                                    <option value="Education" style={{ color: 'black', backgroundColor: 'White' }}>Education</option>
                                </select>
                            </div>

                            <h4 className='ps-4 lead'>Add Your Service</h4>
                            <div className="form-group ps-4 ">
                                <input name="service" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 bio rounded-3" placeholder="Enter a Service you offer" />
                            </div>
                            <h4 className='ps-4 lead'>Add it's price</h4>
                            <div className="form-group ps-4 ">
                                <input name="price" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 rounded-3" placeholder="Enter service price offered" />
                            </div>

                            <h4 className='ps-4 lead'>Description</h4>
                            <div className="form-group ps-4 ">
                                <textarea name="desc" as="textarea" style={{ height: '150px', backgroundColor: '#E0E0E0' }} className="form-control p-3 bio rounded-3" placeholder="Describe your service in more details" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button class="learn-more-btn mt-4 w-50">
                                Add Service
                                <span class="price"></span>
                            </button>
                        </div>
                        <div className='d-flex justify-content-between mt-5'>
                            <div >
                                <Link to="/profileStep3"><button type="button" className="btn mb-3 font-weight-bold profilebtn rounded-3 px-5"><span>Back</span></button></Link>
                            </div>

                            <div >
                                <Link to="/profileStep5"><button type="button" className="btn mb-3 font-weight-bold profilebtn rounded-3 px-5"><span>Next</span></button></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileStep4;
