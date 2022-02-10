import React, { useState } from "react";
import "./auth.css";

class AuthMainWindow extends React.Component {
  state = {
    user: "",
    rememberMe: false,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };
  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }
  render() {
    return (
      <div className="AuthMainWindow">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Имя:
            <input type="text" name="name" />
          </label>
          <label>
            Пароль:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default AuthMainWindow;
