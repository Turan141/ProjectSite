import React from "react";
import "./UsersList.css";
import { Bars } from "react-loader-spinner";

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = { data: [], isLoading: true };
  }

  async componentDidMount() {
    var that = this;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await response.json();
    setTimeout(function () {
      that.setState({
        data: json,
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="Spinner">
          <Bars color="#00BFFF" height={200} width={200} />
        </div>
      );
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
          <p>Найдено {this.state.data.length} элементов</p>
        </ul>
      </div>
    );
  }
}

export default UsersList;
