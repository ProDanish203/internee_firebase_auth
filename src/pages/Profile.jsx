import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {

    const { currentUser, logout} = useAuth();
    const navigate = useNavigate();

    if(!currentUser || currentUser === undefined){
        navigate("/login");
    }

    const handleLogout = async () => {

        await logout();
        navigate("/login");
    }

  return (
    <>
    <div className="profile-card">

        <h3 className='text-2xl font-bold text-center mb-4'>Profile</h3>

        <p className='pl-2'>Logged in as: {currentUser?.email}</p>
        <button className='bg-purple-500 mt-4 py-3 w-full text-white font-bold text-[18px] rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>

    </div>
    </>
  )
}
