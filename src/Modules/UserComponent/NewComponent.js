import React, { useState } from "react";
import "./NewComponent.css";

export default class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      disabled: true,
      props: props,
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
            <p>Name</p>
            <input
              type="text"
              disabled={this.state.disabled}
              value={this.state.propsName}
              onChange={(e) => {
                this.setState({ propsName: e.target.value });
              }}
            ></input>
            <p>User Name</p>
            <input
              type="text"
              disabled={this.state.disabled}
              value={this.state.propsUsername}
              onChange={(e) => {
                this.setState({ propsUsername: e.target.value });
              }}
            ></input>
            <p>Email</p>
            <input
              type="text"
              disabled={this.state.disabled}
              value={this.state.propsEmail}
              onChange={(e) => {
                this.setState({ propsEmail: e.target.value });
              }}
            ></input>
            <p>Street</p>
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
                console.log(this.state.props);
              }}
            >
              Unlock
            </button>
            <button>Close</button>
          </form>
        </div>
      </div>
    );
  }
}

// export default function NewComponent(props) {
//   const [disabled, setDisabled] = useState(true);
//   let userName = props.props.username;

//   return (
//     <div className="main">
//       <div className="innerMain">
//         <form className="formClass">
//           <p>Name</p>
//           <input
//             type="text"
//             disabled={disabled}
//             value={props.name}
//             onChange={props.handleChange}
//           ></input>
//           <p>User Name</p>
//           <input
//             type="text"
//             disabled={disabled}
//             value={userName}
//             onChange={() => {}}
//           ></input>
//           <p>Email</p>
//           <input
//             type="text"
//             disabled={disabled}
//             value={props.props.email}
//             onChange={() => {}}
//           ></input>
//           <p>Street</p>
//           <input
//             type="text"
//             disabled={disabled}
//             value={props.props.address.street}
//             onChange={() => {}}
//           ></input>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setDisabled(!disabled);
//               console.log(props);
//             }}
//           >
//             Unlock
//           </button>
//           <button>Close</button>
//         </form>
//       </div>
//     </div>
//   );
// }
