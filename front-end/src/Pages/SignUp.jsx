import React from "react";

const SignUp = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "Gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "80%",
          width: "30%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          borderRadius: "5%",
        }}
      >
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="First Name"
          style={{ height: "8%", borderRadius: "10px", fontSize: "25px" }}
        />
        <input
          type="text"
          placeholder="Last Name"
          style={{ height: "8%", borderRadius: "10px", fontSize: "25px" }}
        />
        <input
          type="text"
          placeholder="Enter your email"
          style={{ height: "8%", borderRadius: "10px", fontSize: "25px" }}
        />
        <input
          type="text"
          placeholder="Enter your password"
          style={{ height: "8%", borderRadius: "10px", fontSize: "25px" }}
        />
        <input
          type="text"
          placeholder="Confirm password"
          style={{ height: "8%", borderRadius: "10px", fontSize: "25px" }}
        />

        <button
          style={{
            height: "8%",
            borderRadius: "10px",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
