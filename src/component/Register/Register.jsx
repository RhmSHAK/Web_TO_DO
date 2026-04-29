import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Register = () => {

  const { signInWithGoogle, createUser, setUser, updateUser } = use(AuthContext)

  const navigate = useNavigate();

  const handleGoogleSignIN = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)

        Swal.fire({
          title: "Google LogIN Successfully",
          icon: "success",
          draggable: true
        });

        navigate("/")
      })
      .catch(err => {
        console.log(err)
      })
  }


  const handleRegister = e => {

    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password)

    createUser(email, password)
      .then((result) => {
        const user = result.user

        //update profile
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo })

            Swal.fire({
              title: "User LogIN Successfully",
              icon: "success",
              draggable: true
            });

            e.target.reset();
            navigate('/')
          })
          .catch((error) => {
            console.log(error)
            setUser(user)
          })

      })
      .catch((error) => {
        console.log(error)
      })



  }




  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* Left side */}
        <div className="hidden md:flex items-center justify-center bg-green-100 p-6">
          <img
            src="https://i.ibb.co.com/39sPTxTJ/R4xm-Z9-Isun-FYD9cu9n-Fl-L8ccvs-W5-Fbzd-Jq-Ac7-Gn1-PQSHQ72w-Bm36-N3-HILx-B6-Vo-Z-bm-HVQnre-CLBN-x5f-ETz-AVH.jpg"
            alt="todo"
            className="w-72 animate-bounce"
          />
        </div>

        {/* Right side */}
        <div className="p-8 flex flex-col justify-center">

          
          <form onSubmit={handleRegister}>

            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mb-6">
              Register to your To_Do_App
            </p>

            <input
              type="text"
              name="name"
              placeholder="User name"
              className="w-full mb-4 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />


            <input
              type="text"
              name="photo"
              placeholder="PhotoURL"
              className="w-full mb-4 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />


            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-4 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mb-4 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition mb-4">
              Register
            </button>

          </form>

         
          <div className="mt-4">
            <p className='font-semibold text-center pt-5  '>
              Don't Have An Account ?
              <Link className='text-secondary ml-2' to="/login" >LogIn</Link>
            </p>

          
            <div className="flex items-center gap-2 mb-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Google Button */}
            <button
              type="button"
              onClick={handleGoogleSignIN}
              className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="google"
                className="w-5"
              />
              LogIn in with Google
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;