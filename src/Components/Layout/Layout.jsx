import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout({deleteUser,user}) {
  return <>
    <Navbar deleteUser={deleteUser} user={user}/>
    <Outlet/>
  </>
}
