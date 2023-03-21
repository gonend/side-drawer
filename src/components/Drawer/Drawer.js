import React from "react";
import "./Drawer.css";

import Logo from "../Logo/Logo";
import Tip from "../Tip/Tip";
import Participants from "../Participants/Participants";
import Info from "../Info/Info";

const Drawer = (props) => {
  const isOpen = props.isOpen;
  console.log(props);

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <Logo />
      <hr />
      <Info />
      <hr />
      <Tip />
      <hr />
      <Participants />
    </div>
  );
};

export default Drawer;
