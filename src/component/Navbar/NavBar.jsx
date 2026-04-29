import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import userIcon from '../../assets/user.png'
import Swal from 'sweetalert2';

const NavBar = () => {

  const { user, SignOut } = use(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        Swal.fire({
          title: "User LogOut successfully",
          icon: "success",
          draggable: true
        });
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Left  */}
        <h1 className="text-2xl font-bold text-green-600">
          To_Do_App
        </h1>

        {/* Middle  */}
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

        {/* Right Side */}
        <div className='login-btn flex gap-5'>
          {user && (
            <img
              className="rounded-full size-11"
              src={user.photoURL}
              alt="user"
            />
          )}
          {
            user ?
              <button onClick={handleSignOut} className="btn btn-outline btn-error">LogOut</button> :
              <Link to="/login" className="btn btn-outline btn-success">LogIn</Link>
          }
        </div>

      </div>
    </div>
  );
};

export default NavBar;