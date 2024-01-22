import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
        <div className="NavTop">
            <img alt="logo" />
            <button>Connect</button>
        </div>
          <div className="Options">
            <a href="#">JoinEvent</a>
            <a href="#">CreateEvent</a>
            <a href="#">Profile</a>
          </div>  
    </div>
  );
};
