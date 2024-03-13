import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

export default function Login({getUserData,GetCurrentUserId}) {
 
 let user={
email:'',password:''
}
async function Login(user){
  const res= await axios.post("https://localhost:7157/api/Account/Login",user);
  if(res.data.email===user.email){
       
    localStorage.setItem("user",res.data.token);
    getUserData()

    //getId
    GetCurrentUserId(res.data.id);
    console.log(res.data.id);
    
    console.log(res.data.token);
 //   console.log(crruser);
  }
  console.log(res);
}

const navigate=useNavigate();
let formik=useFormik(
    {
        initialValues:user,
        onSubmit:async function(values){
            console.log(values);
            try {
                $(".btn").attr("disabled","true");
                await Login(values);
                $(" .successMsg").fadeIn(500,function(){
                    setTimeout(function(){ navigate('/home');},2000);
                });
              
                
            } catch (error) {
                console.log(error);
                $(".errMsg").fadeIn(500,function(){
                  setTimeout(function(){$(".errMsg").fadeOut(500);
                  $(".btn").removeAttr("disabled");},3000);
              });
                
            }
        },
        validate:function(){
            const errors={};
            
        
            if(!formik.values.email.includes("@")&&!formik.values.email.includes(".com")){
                errors.email='Invalid email address';
            }
           

            return errors
        }
    }
)
return (
    <div>
        <div className="container p-5">
       <div className='errMsg alert alert-danger' style={{'display':'none'}}>Email or password is incorrect .. </div>
       <div className='successMsg alert alert-success' style={{'display':'none'}}>Login has been done successfully!</div>
        <h2 className='py-2'>Login Now:</h2>
        <form className='row g-4 container' onSubmit={formik.handleSubmit}>
           
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" placeholder="email" className='form-control' />
            {formik.errors.email&&formik.touched.email?  <div className='alert alert-danger'>{formik.errors.email}</div>:''}
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" placeholder="password" className='form-control' />
            {formik.errors.password&&formik.touched.password?  <div className='alert alert-danger'>{formik.errors.password}</div>:''}
           
  
            <button className='btn bg-success text-white col-lg-1 ms-auto' type='submit'>Login</button>
        </form>
        </div>
    </div>
);
}
