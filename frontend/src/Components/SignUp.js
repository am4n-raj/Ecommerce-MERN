import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Password from "@mui/icons-material/Password";
import { alpha, styled } from "@mui/material/styles";

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
  const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  });
  return (
    <div className="signup-form">
      <h1>Create Account</h1>
      <ValidationTextField
        className="signup-field"
        id="outlined-basic"
        label="Full Name"
        type="text"
        variant="outlined"
        placeholder="John Doe"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        margin="normal"
        color="warning"
      />
      <ValidationTextField
        className="signup-field"
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        placeholder="john@xyz.com"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
        margin="normal"
      />
      <ValidationTextField
        className="signup-field"
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        required
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Password />
            </InputAdornment>
          ),
        }}
        margin="normal"
      />
      <Button variant="contained" startIcon={<SendIcon />}>
        SignUp
      </Button>
    </div>
  );
}

export default SignUp;
