import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import Button from "@mui/material/Button";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                Product List page
              </h1>
            }
          ></Route>
          <Route path="/add" element={<h1>Add Product page</h1>}></Route>
          <Route path="/update" element={<h1>Update Product page</h1>}></Route>
          <Route path="/profile" element={<h1>Profile page</h1>}></Route>
          <Route path="/logout" element={<h1>Logout page</h1>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
