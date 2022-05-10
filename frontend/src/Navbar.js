import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
        <ul className="nav-ul">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>

        </ul>
    </div>
  )
}