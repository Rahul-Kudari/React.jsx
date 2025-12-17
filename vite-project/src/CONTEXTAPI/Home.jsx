import React from 'react'
import Cart from './Cart'
import { Link, Outlet } from 'react-router-dom'


function Home() {


  return (
    <div>
      <Link to="about">About</Link>
      <Link to="login">login</Link>
      <Link to="products">Products</Link>
      <Link to="cart">Cart</Link>
     <Outlet></Outlet>
      
     
    </div>
  )
}

export default Home