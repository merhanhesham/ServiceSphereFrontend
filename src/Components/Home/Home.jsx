import React from 'react'
import ClientNavbar from '../Client/ClientNavbar'
import ClientMainPage from '../Client/ClientMainPage'
import FreelancerMainPage from '../Freelancer/ServicePostings'
import Profile from '../Freelancer/Profile/Profile'
import $ from 'jquery'
import ServicePostings from '../Freelancer/ServicePostings'
import ProjectPostings from '../Freelancer/ProjectPostings/ProjectPostings'
import { useState } from 'react'
export default function Home() {
  const [PostFlag, setPostFlag] = useState(true)

  function handleSerivePosts(){
    console.log("service");
     setPostFlag(true)
  }
function handleProjectPosts(){
  console.log("Project");
  setPostFlag(false);
}

  return <>

     <div className='container p-5'>
      <div className="container mt-5">
        <div className="buttons">
          <button className='btn btn-dark mx-5' onClick={handleSerivePosts}>Service Posts</button>
          <button className='btn btn-dark' onClick={handleProjectPosts}>Project Posts</button>
        </div>
        <div className="posts my-5">
              {PostFlag?<ServicePostings/>:<ProjectPostings/>}
        </div>
      </div>

     </div>
  </>
}
