import React from "react";
import "./auth.css";

export default function WelcomeWindow(props) {
  console.log(props)
  return (
    <>
      <h1>Welcome {props.props}</h1>
      <h2>You are logged in</h2>
      <button>Exit</button>
    </>
  );
}
