import React from 'react'
import { Link} from 'react-router-dom'
import {ShoppingCart } from 'phosphor-react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='links'>
            <Link to="/"> HOME </Link>
            <Link to="/cart"> 
            <ShoppingCart size={34} color={"red"}/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar