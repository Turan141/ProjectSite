import React from "react";
import NewComponent from "../UserComponent/NewComponent";
import "./UsersList.css";

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      userInfo: [],
      showComponent: false,
      name: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    console.log(e);
    let id = e.id;
    this.setState({ userInfo: id });
    console.log(this.state.userInfo);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
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
    const { name } = this.state;
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
            <li className="UserLi" key={el.id}>
              ФИО: {el.name}
              <br></br>
              Город: {el.address.city}
              <br></br>
              Компания: {el.company.name}
              <button
                onClick={() => {
                  this.setState({ userInfo: el });
                  this.setState({ showComponent: true });
                  console.log(this.state.userInfo);
                }}
                className="userBtn"
              >
                Подробнее
              </button>
            </li>
          ))}
          <p>Найдено {this.state.data.length} элементов</p>
        </ul>
        {this.state.showComponent ? (
          <NewComponent
            props={this.state.userInfo}
            handleChange={this.handleChange}
            name={name}
          />
        ) : null}
      </div>
    );
  }
}

export default UsersList;
