import React from "react";
import "./UsersList.css";

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = { data: [], isLoading: true, userInfo: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ userInfo: e });
    console.log(this.state.userInfo);
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
          <div className="loader"></div>
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
              <button onClick={this.handleClick} className="userBtn">
                Подробнее
              </button>
            </li>
          ))}
          <p>Найдено {this.state.data.length} элементов</p>
        </ul>
      </div>
    );
  }
}

export default UsersList;
