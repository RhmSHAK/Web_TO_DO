import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const NavBar = () => {

  const {user} = use(AuthContext);

    return (
<div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Left - Logo */}
        <h1 className="text-2xl font-bold text-green-600">
          To_Do_App
        </h1>

        {/* Middle - Menu */}
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>
          {
            !user &&
            <>
            <Link to="/login" className="hover:text-green-500">
            Login
          </Link>
          <Link to="/register" className="hover:text-green-500">
            Register
          </Link>
          </>
          }
        </div>

        {/* Right - Logout */}
        { 
          user ?
          <button className="btn btn-outline btn-error">LogOut</button>:
         <Link to="/login" className="btn btn-outline btn-success">LogIn</Link>
        }

      </div>
    </div>
    );
};

export default NavBar;