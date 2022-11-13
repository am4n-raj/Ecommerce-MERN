import React, { useState } from "react";
import Button from "@mui/material/Button";

function SignUp() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const collectData = async () => {
    const result = await fetch("http://localhost:5000/register", {
      method: "Post",
      body: JSON.stringify({ name, email, pwd }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
  };
  return (
    <div className="signup-form">
      <h1>Create Account</h1>
      <input
        className="signup-field"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="signup-field"
        type="password"
        placeholder="Enter Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />

      <input
        className="signup-field"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button variant="contained">SignUp</Button>
    </div>
  );
}

export default SignUp;
