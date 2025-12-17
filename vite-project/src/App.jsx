import { useState } from 'react'

import './App.css'

import Home from './CONTEXTAPI/Home';
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Products from './CONTEXTAPI/Products';
import Login from './CONTEXTAPI/Login';
import About from './CONTEXTAPI/About';
import Cart from './CONTEXTAPI/Cart';

function App() {
 

   const router=createBrowserRouter([
    {
      path:"/",
      element:<Home />,
      children:[
        {
          path:"products",
          element:<Products />
        },{
          path:"login",
          element:<Login />
        },
        {
          path:"about",
          element:<About />
        },{
          path:"cart",
          element:<Cart />
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
<Cart name="rahul"></Cart>
    </>
  )
}

export default App
