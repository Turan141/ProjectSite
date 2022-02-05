import React from "react";
import "./MainWindow.css";
import LeftColumn from "../LeftColumn/LeftColumn";
import UsersList from "../UsersList/UsersList";
import UserPage from "../UserPage/UserPage";

function MainWindow() {
  return (
    <div className="MainWindow">
      <LeftColumn />
      <UsersList />
      <UserPage />
    </div>
  );
}

export default MainWindow;
