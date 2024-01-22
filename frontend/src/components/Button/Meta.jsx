import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import coinbase from "../../../public/coinbase.png";
import MetaMask from "../../../public/MetaMask.png";
import polygon from "../../../public/polygon.png";

export const Meta = () => {
  return (
    <div classNAme="container">
      <div className="chooseYourWallet">
        <h4>Connect</h4>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="options">
        <img src="coinbase" alt="metamask" />
        <img src="MetaMask" alt="polygon" />
        <img src="polygon" alt="coinbase" />
      </div>
    </div>
  );
};
