import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="nav-ul">
      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  )
}
