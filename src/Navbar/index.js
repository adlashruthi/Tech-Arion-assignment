import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css";
const Navbar = () => {
  return (
    <div className='nav'>
        <nav>
        <ul>
            <Link to="/">Counter</Link>&nbsp;&nbsp;
            <Link to="/Grid">Grid</Link>&nbsp; &nbsp;
            <Link to="Login">Login Form </Link>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar