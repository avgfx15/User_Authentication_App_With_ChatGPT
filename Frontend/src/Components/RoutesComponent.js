import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProtectedRoute from "./ProtectedRoute";


const RoutesComponent = () => {
  return (
    <Routes>
       {/* Protected Route for Home */}
       <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
  );
};

export default RoutesComponent;
