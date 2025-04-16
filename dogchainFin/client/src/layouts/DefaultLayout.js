import React from 'react'
import {useEffect} from "react";
import {Link, Navigate, Outlet, useNavigate} from "react-router-dom";
import {useStateContext} from "../Contexts/ContextProvider";

export default function DefaultLayout() {

  const {currentDoctor,setCurrentDoctor,currentPatient,setCurrentPatient,currentPharmacy,setCurrentPharmacy} = useStateContext()
  const navigate = useNavigate()

  if(!currentDoctor && !currentPatient && !currentPharmacy){
    return(
        <Navigate to="/"/>
    )
  }


	const onLogout = (ev) => {
		ev.preventDefault()	
    setCurrentDoctor(null)
    setCurrentPatient(null)
    setCurrentPharmacy(null)
	}

	return(
		<div id="defaultLayout" className="container-flex">
      <header>
        <div className="nav nav bg-primay my-2 d-flex justify-content-between px-5">
					<h1 className="h1">
            Medical Chain
          <i className="ms-2 fa-solid fa-laptop-medical  text-primary"></i>
          </h1>	
					<a href="#" onClick={onLogout} className="btn btn-primary text-center my-auto text-white">Logout</a>
					</div>
				</header>
				<main>
					<Outlet/>
          {currentDoctor && 
          <Navigate to="/DoctorDashboard"/>
          }
          {currentPatient && 
          <Navigate to="/PatientDashboard"/>
          }
          {currentPharmacy && 
          <Navigate to="/PharmacyDashboard"/>
          }
				</main>
    </div>
	)
}
