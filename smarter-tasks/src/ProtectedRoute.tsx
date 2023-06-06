import { Navigate } from "react-router-dom";
import React from 'react';


export function ProtectedRoute({ element }: { element: JSX.Element }) {
 const authenticated = localStorage.getItem("authenticated");
 if (authenticated === "true") {
   return element;
 } else {
   return <Navigate to="/signin" />;
 }
}

