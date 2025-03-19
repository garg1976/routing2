import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import ContactUs from './Component/ContactUs'
import PageNotFound from './Component/PageNotFound/PageNotFound' //
import Info from './Component/Info'
import Services from './Component/Services'
import Navbar from './Component/Navbar'

function App() {
    const routes = createBrowserRouter([{
      path:"/",
      element:<><Navbar/> <Home/></>,
      errorElement:<PageNotFound/>
    },
    {
    path:"/about",
    element:<><Navbar/> <About/></>
  
  },
    {
    path:"/contactus",
    element:<><Navbar/> <ContactUs/></>
  
  },
    {
    path:"/info",
    element:<><Navbar/> <Info/></>
  
  },
    {
    path:"/services",
    element:<><Navbar/> <Services/></>
  
  },
  ])
  
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App