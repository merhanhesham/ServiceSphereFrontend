import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProfileSteps.css';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdCreate } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
const ProfileStep2 = () => {
    // State for selected categories
    const [selectedCategories, setSelectedCategories] = useState([]);

    // categories and subcategories arrays
    const categories = [
        { "id": 1, "Name": "Construction & Renovation" },
        { "id": 2, "Name": "Event Planning" },
        { "id": 3, "Name": "Education" }
    ];

    const subcategories = [
        { "Name": "Civil Engineers", "CategoryId": 1 },
        { "Name": "Mechanical Engineers", "CategoryId": 1 },
        { "Name": "Electrical Engineers", "CategoryId": 1 },
        { "Name": "Architects", "CategoryId": 1 },
        { "Name": "Interior Designers", "CategoryId": 1 },
        { "Name": "General Contractors", "CategoryId": 1 },
        { "Name": "Carpenters", "CategoryId": 1 },
        { "Name": "Plumbers", "CategoryId": 1 },
        { "Name": "Electricians", "CategoryId": 1 },
        { "Name": "Painters", "CategoryId": 1 },
        { "Name": "Event Planners", "CategoryId": 2 },
        { "Name": "Caterers", "CategoryId": 2 },
        { "Name": "Decorators", "CategoryId": 2 },
        { "Name": "DJs/Musicians", "CategoryId": 2 },
        { "Name": "Photographers/Videographers", "CategoryId": 2 },
        { "Name": "Lessons", "CategoryId": 3 }
    ]


    // Handle change in category selection
    const handleCategoryChange = (categoryId, isChecked) => {
        setSelectedCategories(prev => {
            if (isChecked) {
                return [...prev, categoryId];
            } else {
                return prev.filter(id => id !== categoryId);
            }
        });
    };

    // Filter subcategories based on selected categories
    const visibleSubcategories = subcategories.filter(subcategory =>
        selectedCategories.includes(subcategory.CategoryId)
    );


    return (
        <div className="ProfileStepMain " id="ProfileStepMain">
            <div className="w-100 d-flex justify-content-center align-items-center my-5">
                <div className="box-div bg-white d-flex align-items-center py-5 rounded-5 justify-content-center">

                    <div className="container row">
                        <h3 className='py-5 fw-normal' >2/5</h3>
                        <div className='col-md-8  d-flex flex-column gap-4'>

                            <h2 ><span className='p-2'><FaCircle size={10} /></span> Add more work details <BsFillFileEarmarkTextFill size={45} className='pb-2' /></h2>
                            <h4 className='ps-4 lead'>Choose the categories you work in:</h4>
                            <div className="form-group ps-4 ">
                                {categories.map((category, index) => (
                                    <div className="checkbox" key={index}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="categories"
                                                value={category.Name}
                                                onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                                            />
                                            {category.Name}
                                        </label>
                                    </div>
                                ))}
                            </div>


                            {selectedCategories.length > 0 && (
                                <div className="form-group ps-4">
                                    <h4 className='ps-4 lead'>Choose the SubCategories you specialize in:</h4>
                                    {visibleSubcategories.map((subcategory, index) => (
                                        <div className="checkbox" key={index}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="subcategories"
                                                    value={subcategory.Name}
                                                />
                                                {subcategory.Name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <h4 className='ps-4 lead'>Add your Skills</h4>
                            <div className="form-group ps-4 ">
                                <textarea name="Skills" style={{ backgroundColor: '#E0E0E0' }} className="form-control p-3 rounded-3" placeholder="e.g HTML,CSS,JS" />
                            </div>
                        </div>

                        {/*<div className='col-md-4 offset-md-1 d-flex align-items-center'>

                                    </div>*/}

                        <div className='d-flex justify-content-between mt-5'>
                            <div >
                                <Link to="/profileStep1"><button type="button" className="btn mb-3 font-weight-bold profilebtn rounded-3 px-5"><span>Back</span></button></Link>
                            </div>

                            <div >
                                <Link to="/profileStep3"><button type="button" className="btn mb-3 font-weight-bold profilebtn rounded-3 px-5"><span>Next</span></button></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileStep2;
