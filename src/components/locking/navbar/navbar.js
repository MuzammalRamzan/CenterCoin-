import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  tokenAbi,
  tokenAddres,
  abi,
} from "../../../utils/constant";
import "./navbar.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo1 from "../../../asset/images/logo/logo1.png";
import birtish from "../../../asset/images/birtish.png";
import language from "../../../asset/images/language (2).png";
import korean from "../../../asset/images/korean.jpg";

import { useTranslation } from "react-i18next";

import menuIcon from "../../../asset/images/menuIcon.png";
function Navbarr() {
  let accountAd;
  const { t, i18n } = useTranslation();
  const [account, setAccount] = useState("Connect");
  const [isaccount, setIsaccount] = useState("Connect");
  const [showLinks, setShowLinks] = useState(false);
  const contractAddresses = "0x1B3B7610D9e86e31499e43726AF25E0347CfdD92";
  const abi = [
    {
      inputs: [
        { internalType: "contract IBEP20", name: "_Token", type: "address" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "card",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "time",
          type: "uint256",
        },
      ],
      name: "BetAmount",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "time",
          type: "uint256",
        },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "Bet_Amount",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Token",
      outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "_owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "SMSAmount", type: "uint256" }],
      name: "emergencyWithdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "Amount", type: "uint256" }],
      name: "emergencyWithdrawBNB",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "number_of_deposit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "user",
      outputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "uint256", name: "Card_No", type: "uint256" },
        { internalType: "uint256", name: "time", type: "uint256" },
        { internalType: "uint256", name: "_card_Price", type: "uint256" },
        { internalType: "uint256", name: "BetNo", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256[]", name: "deposit_id", type: "uint256[]" },
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  function handleClicks(lang) {
    console.log("lang", lang);
    console.log(2 - 3);
    i18n.changeLanguage(lang);
  }

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
        let navAccount =
          accountAd.substring(0, 4) +
          "..." +
          accountAd.substring(accountAd.length - 4);
        setIsaccount(navAccount);

        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          accountAd = accounts[0];
          setAccount(accountAd);
        });
      }
      getContractTransferEventsByUser();
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
  const getContractTransferEventsByUser = async () => {
    let newArr = [];
    let result = [];
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
    let contract = new web3.eth.Contract(abi, contractAddresses);
    try {
      let continueToken = "";
      var instructorEvent = await contract
        .getPastEvents(
          "BetAmount",
          {
            fromBlock: 12644314,
            toBlock: 12645914,
          },
          function (error, events) {
            if (events) {
              events.forEach((element) => {
                if (element?.returnValues?._buyer === accountAd) {
                  let nature = element?.returnValues?.nature;
                  let _buyer = element?.returnValues?._buyer;
                  let _tokens = element?.returnValues?._tokens;
                  let _amounts = element?.returnValues._amounts;

                  newArr.push({
                    nature: nature,
                    _buyer: _buyer,
                    _tokens: web3.utils.fromWei(_tokens),
                    _amounts: web3.utils.fromWei(_amounts),
                  });
                }
              });
            }
          }
        )
        .then(function (events) {
          // console.log("getPastEvents", events)
        });
    } catch (error) {
      console.error("getEvents", error);
    } finally {
      return result;
    }
  };
  const handleClick = async () => {
    const web3 = window.web3;
    try {
      console.log(account);
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      await tokenContract.methods
        .approve(contractAddress, web3.utils.toWei("" + 100))
        .send({ from: accountAd });
      const result = await contract.methods
        .Bet_Amount(web3.utils.toWei("" + 100))
        .send({ from: accountAd });
      console.log(result);
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
    }
  };
  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 1000);
  }, []);

  return (
    <div className="container navbarone">
      <div className="row ">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img className="logo" src={logo1} alt="Logo" />
              <br />
              <span id="centercoin">CENTER COIN</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="offset-md-6">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {" "}
                  <a
                    href="#"
                    className="btn btn-warning btn-sm"
                    aria-pressed="true"
                    id="connect"
                    onClick={loadWeb3}
                  >
                    {isaccount}
                  </a>
                </Nav.Link>
                <div className="dropdown">
                  <a href="#home">
                    <img src={birtish} className="birtishimage" />
                  </a>
                  <div class="dropdown-content">
                    <a className="btn" onClick={() => handleClicks("en")}>
                      <img
                        className="listflags"
                        src={language}
                        style={{
                          height: "auto",
                          width: "30px",
                          padding: "0px 5px",
                        }}
                      />
                      {t("English.1")}
                    </a>
                    <a className="btn" onClick={() => handleClicks("ko")}>
                      <img
                        className="listflags"
                        src={korean}
                        style={{
                          height: "auto",
                          width: "30px",
                          padding: "0px 5px",
                        }}
                      />
                      {t("Korean.1")}
                    </a>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
export default Navbarr;
