import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Profile } from "../pages/Profile";

export const Router = () => {

  return (
    <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
