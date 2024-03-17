
import { Formik, Form, Field } from 'formik';
import { MdAccountCircle } from 'react-icons/md';
import './EditProfile.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



const EditProfile = () => {
    const initialValues = {
        displayName: '',
        title: '',
        experienceLevel: '',
        phoneNumber: '',
        bio: '',
        education: ''}
        // Add other fields as needed

        const [profileUpdated, setUpdateProfile] = useState(null);

    const updateProfile = async () => {
        try {
            const token = localStorage.getItem('user');
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const response = await axios.get(
                `https://localhost:7157/api/Freelancer/GetProfile`,
                { headers: headers }
            );

            console.log(response.data);
            setUpdateProfile(response.data);

        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };
    useEffect(() => {
        updateProfile();
    }, []);

    return (

        <div className="about" id="about">
            <div className="w-100 d-flex justify-content-center align-items-center my-5">
                <div className="box-div bg-white d-flex align-items-center py-5">
                    <div className="container">
                        <h2 className='text-center mb-5 fw-bold'>Edit Your Profile <span><MdAccountCircle size={40} className='mb-2' /></span></h2>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values, actions) => {
                                console.log(values);
                                actions.setSubmitting(false);
                                // After you get the endpoint, you will call the updateProfile function here
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className='container'>
                                    <div className="form-group">
                                        <label htmlFor="displayName">Display Name</label>
                                        <Field name="displayName" type="text" className="form-control"placeholder="Name" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <Field name="title" type="text" className="form-control"placeholder="Your job title" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="experienceLevel">Experience Level</label>
                                        <Field as="select" name="experienceLevel" className="form-control"style={{color:'#999'}} >
                                            <option value="" >Select your experience level</option>
                                            <option value="Beginner" style={{color:'black'}}>Beginner</option>
                                            <option value="Intermediate" style={{color:'black'}}>Intermediate</option>
                                            <option value="Advanced" style={{color:'black'}}>Advanced</option>
                                        </Field>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <Field name="phoneNumber" type="tel" className="form-control" placeholder="Your phone number (e.g., 01006638039)" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="bio">Bio</label>
                                        <Field name="bio" as="textarea" className="form-control"placeholder="Share a bit about yourself. E.g., your professional background, passions, and key achievements." />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="education">Education</label>
                                        <Field name="education" type="text" className="form-control"placeholder="University/Major" />
                                    </div>

                                    {/* Add additional fields as needed */}

                                    <Link to='/profile'><button type="submit" className="btn profilebtn mt-4" disabled={isSubmitting}>
                                        Save Changes
                                    </button></Link>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
