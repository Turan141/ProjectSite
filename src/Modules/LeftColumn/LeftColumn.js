import React from "react";
import "./LeftColumn.css";
import AuthMainWindow from "../Auth/Auth";

function LeftColumn() {
  return (
    <>
      <div className="LeftColumn">
        <button>По имени</button>
        <button>По городу</button>
        <AuthMainWindow />
      </div>
    </>
  );
}

export default LeftColumn;
