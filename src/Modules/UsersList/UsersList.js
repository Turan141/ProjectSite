import React from "react";
import "./UsersList.css";
import { Bars } from "react-loader-spinner";
import Users from "./UserListFn";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
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
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="Spinner">
          <Bars color="#00BFFF" height={200} width={200} />
        </div>
      );
    }
    return <Users props={this.state} />;
  }
}

export default UsersList;
