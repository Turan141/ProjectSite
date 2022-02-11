import React from "react";
import "./auth.css";
import LoggedTrue from "./LoggedTrue";

export default function LoginWindow() {
  let user;
  let password;
  let submitBtn = document.getElementById("submit");
  let checkBtn;
  let localStorageKeys = localStorage;
  return (
    <>
      <div className="AuthMainWindow">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            user = document.getElementById("user");
            password = document.getElementById("password");
            checkBtn = document.getElementById("checkBtn");
            if (checkBtn.checked) {
              localStorage.setItem(
                JSON.stringify(user.value),
                JSON.stringify(password.value)
              );
            } else {
              for (var key in localStorageKeys) {
                if (
                  JSON.stringify(user.value) == key &&
                  JSON.stringify(password.value) == localStorageKeys[key]
                ) {
                  localStorage.setItem("isLogged", true);
                  window.location.reload();
                } else console.log("bad");
              }
            }
          }}
        >
          <label>
            Имя:
            <input autoComplete="false" id="user" type="text" name="name" />
          </label>
          <label>
            Пароль:
            <input id="password" type="password" name="password" />
          </label>
          <div className="register">
            <p>Check it to Register</p>
            <input
              onChange={function () {
                submitBtn = document.getElementById("submit");
                checkBtn = document.getElementById("checkBtn");
                if (checkBtn.checked) {
                  submitBtn.innerHTML = "Register!";
                } else {
                  submitBtn.innerHTML = "Log In!";
                }
              }}
              name="Register?"
              type="checkbox"
              id="checkBtn"
            ></input>
          </div>
          <button id="submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
