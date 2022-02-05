import React from "react";
import "./UsersList.css";

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = { data: [], isLoading: true };
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await response.json();
    console.log(json);
    this.setState({ data: json, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Waiting...</div>;
    }

    return (
      <div className="UserDiv">
        <ul className="UserUl">
          <h1>Список пользователей</h1>
          {this.state.data.map((el) => (
            <li className="UserLi" key={el.name}>
              ФИО: {el.name}
              <br></br>
              Город: {el.address.city}
              <br></br>
              Компания: {el.company.name}
              <button className="userBtn">Подробнее</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
