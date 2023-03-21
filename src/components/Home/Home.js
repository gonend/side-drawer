import React, { useState } from "react";
import "./Home.css";
import Drawer from "../Drawer/Drawer";

const Home = () => {
  const [openD, setOpenD] = useState(false);
  const open = () => setOpenD(!openD);

  return (
    <>
      <div
        className="home_container"
        id={openD ? "open" : ""}
        onClick={open}
      ></div>
      {openD ? (
        <div className="drawer">
          <Drawer isOpen={openD} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
