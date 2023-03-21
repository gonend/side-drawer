import React from "react";
import "./Logo.css";
import logo from "../../sources/logo2.png";
import { AiOutlineEdit, AiOutlineSchedule } from "react-icons/ai";

const Logo = () => {
  return (
    <>
      <span className="edit-container">
        <div className="edit">
          edit <AiOutlineEdit />
        </div>
        <div className="edit" style={{ color: "red" }}>
          Cancel <AiOutlineSchedule />
        </div>
      </span>
      <span className="drawer-span with-image">
        <img src={logo} alt="" />
        <br />
        <h2>Workout of the day</h2>
      </span>
    </>
  );
};

export default Logo;
