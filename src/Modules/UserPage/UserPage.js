import React from "react";
import "./UserPage.css";

function UserPage() {
  return (
    <div className="UserPageMain">
      <div className="UserPageUp"></div>
      <div className="UserPageInfoMain">
        <section className="info">
          <form>
            <input type="text" value="salam">
              salam
            </input>
          </form>
        </section>
      </div>
      <button>Send</button>
    </div>
  );
}

export default UserPage;
