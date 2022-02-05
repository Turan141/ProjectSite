import React from "react";
import "./UsersList.css";

let userList = [];

class UsersList extends React.Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        return console.log(data);
      });
  }

  render() {
    return (
      <div className="UsersList">
        <h1>Список пользователей</h1>
      </div>
    );
  }
}

export default UsersList;
