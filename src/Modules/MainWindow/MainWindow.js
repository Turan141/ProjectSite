import React from "react";
import "./MainWindow.css";
import LeftColumn from "../LeftColumn/LeftColumn";
import UsersList from "../UsersList/UsersList";

function MainWindow() {
  return (
    <div className="MainWindow">
      <LeftColumn />
      <UsersList />
    </div>
  );
}

export default MainWindow;
