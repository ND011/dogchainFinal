import React, { Component } from "react";
import { BrowserRouter as Router, Route,createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Connect from "./pages/Connect"
import App from "./App"
import GuestLayout from "./layouts/GuestLayout";
import Signup from "./pages/Signup";
// import DefaultLayout from "./Layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout/>,
    children:[
      {
        path:"/Home", 
        element:<Home/>
      },
      {
        path:"/Connect", 
        element:<Connect/>
      },
      {
        path:"/Signup", 
        element:<Signup/>
      },
    ]
  },
]);

export default router;
