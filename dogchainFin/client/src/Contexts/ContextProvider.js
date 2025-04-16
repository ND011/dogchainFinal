import React from 'react';
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const StateContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
})

 const ContextProvider = ({children}) => {
	const [currentUser, _setCurrentUser] = useState(localStorage.getItem("CURRENT_USER"));

	const setCurrentUser = (userAddress) => {
		_setCurrentUser(userAddress) 
		if(userAddress){
			localStorage.setItem("CURRENT_USER", userAddress);
      console.log("LocalStorage currentUser",localStorage.getItem("CURRENT_USER"))
		}else{
			localStorage.removeItem("CURRENT_USER");
		}
	}


	return(
		<StateContext.Provider value={{
      currentUser,
      setCurrentUser,
		}}>
		{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
export default ContextProvider
