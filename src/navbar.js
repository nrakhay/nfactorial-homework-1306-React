import { useState, useEffect } from "react";
import logo from "./images/googleLogo.png";
import "./navbar.css";

function Navbar() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <img src={logo} alt="Google Logo" className="logo" />
        <div className="inputContainer">
          <input type="text" placeholder="Search" className="inputBox" />
        </div>
      </div>
      <div className="time">{time}</div>
    </div>
  );
}

export default Navbar;
