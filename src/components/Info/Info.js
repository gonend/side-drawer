import React from "react";
import "./Info.css";
import { mockInfo } from "../../sources/Data";

const Info = () => {
  return (
    <span className="info-span">
      <span>
        {mockInfo.map((info) => (
          <div className="info">
            {info.icon}
            <br />
            <h2>{info.title}</h2>
            <br />
            <b>{info.subtitle}</b>
          </div>
        ))}
      </span>
    </span>
  );
};

export default Info;
