import React, { createContext } from "react";
import { useContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { EVENT_ABI } from "./abi.jsx";

const StateContext = createContext();

  export const StateContextProvider = ({ children }) => {
    const { contract } = useContract(
      "0x8a9422f30C62F7E2006f4BE07e82a82a781615c9",
      EVENT_ABI,
    );
  
  console.log({ contract });

  const { mutateAsync: createEvent } = useContractWrite(
    contract,
    "CreateEvents",
  );
  const address = useAddress();
  const connect = useMetamask();

  const finishCreatingEvent = async (params) => {
    try {
      const data = await createEvent([
        params.title,
        params.subtitle,
        params.startdate,
        params.price,
        params.totalParticipants,
        params.endDate,
        params.streamLink,
      ]);
      console.log("Contract success", data);
    } catch (errMsg) {
      console.log("Failed:", errMsg);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createEvent: finishCreatingEvent,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  useContext(StateContext);
};