import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';
import Home from './component/Home/Home.jsx';

import AuthProvider from './contexts/AuthProvider.jsx';
import LogIN from './component/LogIn/LogIN.jsx';
import Register from './component/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: "Login",
        Component: LogIN
      },
      {
        path: "register",
        Component: Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
