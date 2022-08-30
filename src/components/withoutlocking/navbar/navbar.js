import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  tokenAbi,
  tokenAddres,
  abi,
} from "../../../utils/constant";
import "./navbar.css";

function Navbarr() {
  let accountAd;
  const [account, setAccount] = useState("Connect");
  const loadWeb3 = async () => {
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
      }
      if (isConnected === true) {
        let accounts = await getAccounts();
        accountAd = accounts[0];
        setAccount(accountAd);
        window.ethereum.on("accountsChanged", function (accounts) {
          accountAd = accounts[0];
          setAccount(accountAd);
        });
      }
    } catch (error) {
      console.log("Error while connecting metamask", error);
    }
  };

  const getAccounts = async () => {
    const web3 = window.web3;
    try {
      let accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
      return null;
    }
  };

  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <span href="#home"></span>
        </div>
        <div className="col-sm-3 offset-md-6 connect">
          <a
            href="#"
            className="btn btn-primary btn-sm"
            aria-pressed="true"
            id="connect"
            onClick={loadWeb3}
          >
            {account}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbarr;
