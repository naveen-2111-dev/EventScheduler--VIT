import React from "react";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Meta = () => {
  return (
    <div classNAme="container">
      <div className="chooseYourWallet">
        <h4>Connect</h4>
        {/* <FontAwesomeIcon icon={faTimes} /> */}
      </div>
      <div className="options">
        <img src="" alt="metamask" />
        <img src="" alt="polygon" />
        <img src="" alt="coinbase" />
        <img src="" alt="rainbow" />
      </div>
    </div>
  );
};
