import React from "react";
import "./auth.css";
import LoginWindow from "./LoggedFalse";
import WelcomeWindow from "./LoggedTrue";

class AuthMainWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: localStorage.getItem("isLogged"),
      userName: "User",
    };
  }

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <WelcomeWindow props={this.state.userName} />
        ) : (
          <LoginWindow />
        )}
      </>
    );
  }
}

export default AuthMainWindow;
