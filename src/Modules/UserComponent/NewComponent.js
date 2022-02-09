import React, { useState } from "react";
import "./NewComponent.css";

export default function NewComponent(props) {
  const [disabled, setDisabled] = useState(true);
  let userName = props.props.username;

  return (
    <div className="main">
      <div className="innerMain">
        <form className="formClass">
          <p>Name</p>
          <input
            type="text"
            disabled={disabled}
            value={props.name}
            onChange={props.handleChange}
          ></input>
          <p>User Name</p>
          <input
            type="text"
            disabled={disabled}
            value={userName}
            onChange={() => {}}
          ></input>
          <p>Email</p>
          <input
            type="text"
            disabled={disabled}
            value={props.props.email}
            onChange={() => {}}
          ></input>
          <p>Street</p>
          <input
            type="text"
            disabled={disabled}
            value={props.props.address.street}
            onChange={() => {}}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              setDisabled(!disabled);
              console.log(props);
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
