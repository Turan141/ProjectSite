import React from "react";
import "./NewComponent.css";

export default class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      disabled: true,
      props: props.props,
      propsName: props.props.name,
      propsUsername: props.props.username,
      propsEmail: props.props.email,
      propsStreet: props.props.address.street,
    };
  }
  onChange = (e) => {
    this.setState({
      props: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="innerMain">
          <form className="formClass">
            <label>Name</label>
            <input
              type="text"
              disabled={this.state.disabled}
              value={this.state.propsName}
              onChange={(e) => {
                this.setState({ propsName: e.target.value });
              }}
            ></input>
            <label>User Name</label>
            <input
              type="text"
              disabled={this.state.disabled}
              value={this.state.propsUsername}
              onChange={(e) => {
                this.setState({ propsUsername: e.target.value });
              }}
            ></input>
            <label>Email</label>
            <input
              type="email"
              disabled={this.state.disabled}
              value={this.state.propsEmail}
              onChange={(e) => {
                this.setState({ propsEmail: e.target.value });
              }}
            ></input>
            <label>Street</label>
            <input
              type="text"
              disabled={this.state.disabled}
              value={this.state.propsStreet}
              onChange={(e) => {
                this.setState({ propsStreet: e.target.value });
              }}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.setState({ disabled: false });
              }}
            >
              Unlock
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                let jsonData = {
                  propsName: this.state.propsName,
                  propsUsername: this.state.propsUsername,
                  propsEmail: this.state.propsEmail,
                  propsStreet: this.state.propsStreet,
                };
                jsonData = JSON.stringify(jsonData);
                console.log(jsonData);
              }}
            >
              Send
            </button>
            <button>Close</button>
          </form>
        </div>
      </div>
    );
  }
}

