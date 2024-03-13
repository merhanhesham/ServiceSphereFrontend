import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

export default function Register() {
    const [selectedRole, setSelectedRole] = useState('');
 let user={
    DisplayName:'',email:'',password:'',rePassword:'',PhoneNumber:'',Role:''
}
async function register(user){
  const res= await axios.post("https://localhost:7157/api/Account/Register",user);
  console.log(res);
}
// Handle change for radio buttons
const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    formik.setFieldValue('Role', event.target.value); // Set Role field in formik
};
const navigate=useNavigate();
let formik=useFormik(
    {
        initialValues:user,
        onSubmit:async function(values){
            console.log(values);
            try {
                $(".btn").attr("disabled","true");
                await register(values);
                $(" .successMsg").fadeIn(500,function(){
                    setTimeout(function(){ navigate('/login');},2000);
                });
              
                
            } catch (error) {
                console.log(error);
                if(error.response.data.message==='this email already exists'){
                    $(".errMsgEmailExist").fadeIn(500,function(){
                        setTimeout(function(){$(".errMsgEmailExist").fadeOut(500);
                        $(".btn").removeAttr("disabled");},3000);
                    });
                }
                else{
                    $(".errMsg").fadeIn(500,function(){
                        setTimeout(function(){$(".errMsg").fadeOut(500);
                        $(".btn").removeAttr("disabled");},3000);
                    });
                }
                
            }
        },
        validate:function(){
            const errors={};
            
            if(!formik.values.DisplayName.match(/^[A-Za-z]+/)){
                errors.DisplayName='name must contain only alphabets and numbers';
            }
            if(!formik.values.email.includes("@")&&!formik.values.email.includes(".com")){
                errors.email='Invalid email address';
            }
            if(!formik.values.password.match(/^(?=.*[^\w\d])(?=.*\d)(?=.*[A-Z]).{6,}$/)){
                errors.password='Invalid password ';
            }
            if(formik.values.password!==formik.values.rePassword){
                errors.rePassword='Passwords do not match';
            }
            if(!formik.values.PhoneNumber.match(/^01[0125][0-9]{8}$/)){
                errors.PhoneNumber='Invalid Phone number';
            }

            if(formik.values.Role===''){
                errors.PhoneNumber='You Must Choose the role';
            }
            

            return errors
        }
    }
)
return (
    <div>
        <div className="container p-5">
       <div className='errMsg alert alert-danger' style={{'display':'none'}}>authentication failed .. </div>
       <div className='errMsgEmailExist alert alert-danger' style={{'display':'none'}}>authentication failed ..Email already Exist ! </div>
       <div className='successMsg alert alert-success' style={{'display':'none'}}>Register has been done successfully!</div>
        <h2 className='py-2'>Register Now:</h2>
        <form className='row g-4 container' onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.DisplayName} type="text" name="DisplayName" placeholder="name" className='form-control'  />
            {formik.errors.name&&formik.touched.DisplayName?  <div className='alert alert-danger'>{formik.errors.DisplayName}</div>:''}
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" placeholder="email" className='form-control' />
            {formik.errors.email&&formik.touched.email?  <div className='alert alert-danger'>{formik.errors.email}</div>:''}
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" placeholder="password" className='form-control' />
            {formik.errors.password&&formik.touched.password?  <div className='alert alert-danger'>{formik.errors.password}</div>:''}
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type="password" name="rePassword" placeholder="confirm password" className='form-control' />
            {formik.errors.rePassword&&formik.touched.rePassword?  <div className='alert alert-danger'>{formik.errors.rePassword}</div>:''}
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PhoneNumber} type="text" name="PhoneNumber" placeholder="Phone Number" className='form-control' />
            {formik.errors.PhoneNumber&&formik.touched.PhoneNumber?  <div className='alert alert-danger'>{formik.errors.PhoneNumber}</div>:''}
            <div>
            <label className="btn btn-success mx-4">
            <input onChange={handleRoleChange} type="radio" name="Role" id="option1" className=''   value='Client'/> Client
             </label>
             <label className="btn btn-success">
            <input onChange={handleRoleChange} type="radio" name="Role" id="option2"  value='Freelancer'/> Freelancer
             </label>
            {formik.errors.Role&&formik.touched.Role?  <div className='alert alert-danger'>{formik.errors.Role}</div>:''}

            </div>
            <button className='btn bg-success text-white col-lg-1 ms-auto' type='submit'>Register</button>
        </form>
        </div>
    </div>
);

}
