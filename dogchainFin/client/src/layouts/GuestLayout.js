import React from 'react'
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Contexts/ContextProvider";
import Navbar from "../Components/Navbar";

export default function GuestLayout() {
  const {currentUser} = useStateContext();
  if(currentUser==null){
    return(
      <>
        <Navbar />
        <Outlet/>
        <Navigate to="/Home"/>
      </>
    )
  }
}
// if(currentUser){
//           return(
//             <>
//               <Navigate to="/DoctorDashboard"/>
//             </>
//           )
// }

// if(currentPharmacy){
//           return(
//             <>
//               <Navigate to="/PharmacyDashboard"/>
//             </>
//           )
// }
//

// if(currentHealthcare){
//     if(currentPharmacy){
//           console.log("GuestLayout, currentPharmacy is set")
//           console.log("GuestLayout, currentPharmacy is set")
//       return(
//         <>
//          <Navigate to="/"/>
//         </>
//       )
//       }
//     else{
//         return(
//             <div>
//               <Outlet/>
//             <Navigate to="/Home"/>
//             </div>
//         )
//       }
//   }
//   else{
//     console.log("currentHealthcare",currentHealthcare)
//     return(
//       <div>
//         <Outlet/>
//         <Navigate to="/HealthcareLogin"/>
//       </div>
//     )
// 	}
// }
