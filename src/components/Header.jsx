import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthProvider';

export const Header = () => {

    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    }

  return (
    <>
    <header className='bg-purple-600 p-4 flex justify-between items-center gap-2'>
        <h2 className='text-2xl'>
            <Link to="/" className='text-white font-bold'>LOGO</Link>
        </h2>

        <nav className='text-white font-[500] flex items-center justify-between gap-5'>
        {!currentUser && (
        <>
            <Link to="/login" className='cursor-pointer'>Login</Link>
            <Link to="/signup" className='cursor-pointer'>Signup</Link>
        </>
        )}
        </nav>

    </header> 
    </>
  )
}
