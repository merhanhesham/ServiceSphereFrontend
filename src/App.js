import logo from './logo.svg';
import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Authorization/Register/Register';
import Login from './Components/Authorization/Login/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AddService from './Services/Service/AddService';
import AllServices from './Services/Service/Allservices/AllServices';
import ClientMainPage from './Components/Client/ClientMainPage/ClientMainPage';
import FreelancerMainPage from './Components/Freelancer/ServicePostings';
import ServicePostings from './Components/Freelancer/ServicePostings';
import ProjectPostings from './Components/Freelancer/ProjectPostings/ProjectPostings';
import Profile from './Components/Freelancer/Profile/Profile';

function App() {
  const [crrUser, setCrrUser] = useState(null);

  function getUserData() {
    if (localStorage.getItem("user") != null) {
      const user = jwtDecode(localStorage.getItem("user"));
      setCrrUser(user);
      console.log(crrUser);
      console.log(user);
    }

  }

  async function GetCurrentUserId() {
    try {
      const token = localStorage.getItem('user');
      const headers = {
        Authorization: `Bearer ${token}`
      };

      const { data } = await axios.get(
        'https://localhost:7157/api/Account',
        // Request body is empty, assuming serviceDto is being sent from the client
        { headers } // Pass headers as a separate object
      );
      return data.id;
      console.log(data);
    } catch (error) {
      console.error('Error adding service:', error);
    }
  }
  function deleteUser() {
    setCrrUser(null);

  }
  function ProtectedRoute({ children }) {
    if (localStorage.getItem("user") == null) {
      return <Navigate to='/login' />
    } else {
      return children;
    }
  }
  function reload() {

    if (localStorage.getItem("user") != null && crrUser == null) {
      getUserData();
    }
    console.log("hello reloading...");
  }
  useEffect(function () {
    reload();

    getUserData();

  }, [])

  const router = createBrowserRouter(
    [
      {
        path: '', element: <Layout deleteUser={deleteUser} user={crrUser} />, children: [
          { path: '', element: <Home /> },
          { path: 'home', element: <Home /> },
          { path: 'Register', element: <Register /> },
          { path: 'Login', element: <Login getUserData={getUserData} GetCurrentUserId={GetCurrentUserId} /> },
          { path: 'AddService', element: <AddService GetCurrentUserId={GetCurrentUserId} crrUser={crrUser} /> },
          { path: 'AllServices', element: <AllServices /> },
          { path: 'ClientMainPage', element: <ClientMainPage /> },
          { path: 'ServicePostings', element: <ServicePostings /> },
          { path: 'ProjectPostings', element: <ProjectPostings /> },
          { path: 'profile', element: <Profile /> },
          { path: '*', element: <>not found</> },

        ]
      }
    ]
  );

  return <>
    <RouterProvider router={router} />

  </>
}

export default App;
