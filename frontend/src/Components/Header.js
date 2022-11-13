import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";

export default function Header() {
  return (
    <div className="nav-ul">
      <ul>
        <li>
          <Link to="/">
            <Button variant="text">Products</Button>
          </Link>
        </li>
        <li>
          <Link to="/add">
            <Button variant="text">Add Product</Button>
          </Link>
        </li>
        <li>
          <Link to="/update">
            <Button variant="text">Update Product</Button>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Button variant="text">Profile</Button>
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <Button variant="text">Logout</Button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <Button variant="text">SignUp</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
