import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  abi,
  tokenAddres,
  tokenAbi,
} from "../../../utils/constant";
import "./info.css";
import { ToastContainer, toast } from "react-toastify";

// import logo from "../../asset/images/logo.png";
import logo from "../../../asset/images/logo.png";
import menuIcon from "../../../asset/images/menuIcon.png";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
function Info() {
  let accountAd;
  const { t, i18n } = useTranslation();
  const [account, setAccount] = useState("Connect");
  const [showLinks, setShowLinks] = useState(false);
  const [dailyProfit, setdailyProfit] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [withdrawTime, setWithdrawTime] = useState(0);
  const [enterAmount, setEnterAmount] = useState(0);
  const [fourteenDaysReward, setfourteenDaysReward] = useState(0);
  const [days, setdays] = useState(0);
  const [contractBalance, setcontractBalance] = useState(0);
  const [totalusers, setTotalUsers] = useState(0);

  const getData = async () => {
    try {
      const web3 = window.web3;
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let contract = new web3.eth.Contract(abi, contractAddress);
      let accountDetails = await tokenContract.methods
        .balanceOf(contractAddress)
        .call();
      setcontractBalance(web3.utils.fromWei(accountDetails));
      let total_users = await contract.methods.total_users().call();
      setTotalUsers(total_users);
    } catch (error) {
      // console.log("data", error);
    }
  };

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
        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          accountAd = accounts[0];
          setAccount(accountAd);
        });
      }
      getData();
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
    <div className="container-fluid ">
      <div className="container infoone">
        <div className="row">
          <div className="col-sm-8">
            <div className="info">
              <p className="infotest">
                {t("Totalincome.1")}: {t("basedonyourtarrifplan.1")}
                <span> ({t("from1%to90%.1")})</span>
              </p>
              <p className="infotest">
                {t("Basicinterestrate:.1")}
                <span> {t("0.033%to0.123%every24hours.1")}</span>{" "}
                {t("-onlyfornewdeposits.1")}
              </p>
              <p className="infotest">
                {t("Minimaldeposit:.1")}{" "}
                <span>{t("1CenterCoinminimumlimit.1")}</span>,{" "}
                {t("nomaximallimit.1")}
              </p>
              <p className="infotest">
                {t("Earnings.1")} <span>{t("everymoment.1")}</span>,{" "}
                {t("withdraw.1")} <span>{t("anytime.1")} </span>(
                {t(
                  "ifyouusecapitalizationofinterestyoucanwithdrawonlyafterendofyourdeposit.1"
                )}
                )
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <span className="infostaked">
              <a
                href={`https://etherscan.io/address/${contractAddress}`}
                target="blank"
                className="btn btn-warning btn1"
                bg="light"
                text="dark"
              >
                {t("contract.1")}
              </a>
            </span>
            <br />
            <span className="infostaked">{t("TotalContractBalance.1")}</span>
            <span className="infostakedvalue">{contractBalance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
