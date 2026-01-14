import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ fullName: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // valiadtion:
  };

  return (
    <div>
      <h1> Sign Up </h1>  
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          margin: "0 auto",
        }}
      >
        {/* 1 => 8px */}
        <TextField
          sx={{ mb: "20px" }}
          //   error
          name="fullName"
          label="Name"
          placeholder="Enter name"
          value={user.name}
          onChange={handleChange}
        />
        <TextField
          sx={{ mb: "20px" }}
          //   error
          name="email"
          label="Email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
        />
        <TextField
          sx={{ mb: "20px" }}
          //   error
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          value={user.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            color: "#333",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
