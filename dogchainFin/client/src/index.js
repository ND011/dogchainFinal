import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import router from './router'
import ContextProvider from "./Contexts/ContextProvider"


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>
);
