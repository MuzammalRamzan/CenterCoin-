import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  contractAddress,
  abi,
  tokenAddres,
  tokenAbi,
} from "../../../utils/constant";
import "./myaccount.css";
import { ToastContainer, toast } from "react-toastify";

// import logo from "../../asset/images/logo.png";
import logo from "../../../asset/images/logo.png";
import menuIcon from "../../../asset/images/menuIcon.png";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function Myaccount({ setLoading }) {
  let accountAd;
  const { t, i18n } = useTranslation();
  const [account, setAccount] = useState("Connect");
  const [showLinks, setShowLinks] = useState(false);
  const [dailyProfit, setdailyProfit] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [withdrawTime, setWithdrawTime] = useState(0);
  const [enterAmount, setEnterAmount] = useState(0);
  const [uplineearb, setuplineearn] = useState(0);
  const [days, setdays] = useState(0);
  const [WithdrawAbleReward, setWithdrawAbleReward] = useState(0);
  const [referralReward, SetReferralReward] = useState(0);
  const [userstaked, setuserstaked] = useState(0);
  const [numberodreferral, setnumberodreferral] = useState(0);

  const [withdrawamount, setwithdrawamount] = useState(0);

  const getData = async () => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let uplinereward = await contract.methods
        .getUserAvailable(accountAd)
        .call();
      setWithdrawAbleReward(formatThousands(web3.utils.fromWei(uplinereward)));
      uplinereward = await contract.methods
        .getUserTotalDeposits(accountAd)
        .call();
      setuserstaked(web3.utils.fromWei(uplinereward));
    } catch (error) {
      console.log("Error while checking locked account", error);
    }
  };
  function formatThousands(num) {
    var numbr = parseFloat(parseFloat(num).toFixed(6));
    var values = numbr.toString().split(".");
    return (
      values[0].replace(/.(?=(?:.{3})+$)/g, "$&,") +
      (values.length == 2 ? "." + values[1] : "")
    );
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
        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          accountAd = accounts[0];
          setAccount(accountAd);
        });
      }
      getData();
    } catch (error) {
      console.log("Error while connecting metamask", error);
      // alert("Error while connecting metamask");
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

  const WithdrawReward = async () => {
    try {
      if (parseInt(WithdrawAbleReward) > 0) {
        console.log("HEressf12");
        const web3 = window.web3;
        let contract = new web3.eth.Contract(abi, contractAddress);
        setLoading(true);
        let uplinereward = await contract.methods

          .withdraw()
          .send({
            from: account,
          })
          .then(async (output) => {
            setLoading(false);
            toast.success("Transaction Completed");
          })
          .catch((e) => {
            setLoading(false);
            toast.error(e.message);
          });
      } else if (WithdrawAbleReward <= 0) {
        setLoading(false);

        toast("Please recharge!! Your Balance is 0 or less than 0");
      }
    } catch (error) {
      setLoading(false);

      console.log("Error while fetching acounts: ", error);
    }
  };

  function copyToClipboard(e) {
    try {
      let get = document.getElementById("textAreaRef").select();
      document.execCommand("copy");
      e.target.focus();
      toast.success("copied!");
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
    }
  }

  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 1000);
  }, []);

  return (
    <div className="container myaccountone">
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-sm-7">
          <div className="mystaked">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span className="mystakedtext">{t("WithdrawableReward.1")}</span>
              <span className="mystakedvalue">
                {Number(WithdrawAbleReward).toFixed(2)}
              </span>
              <span className="mystakedtext">{t("UserTotalDeposit.1")}</span>
              <span className="mystakedvalue">{userstaked}</span>
              <button
                className="btn btn-warning"
                onClick={WithdrawReward}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {t("Withdraw.1")}
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10">
            <input
              placeholder="Please connect to your wallet"
              value={`${window.location.protocol}//${window.location.host}/login?ref=${account}`}
            />
          </div>
          <div className="col-sm-2">
            <button className="copy" id="textAreaRef" onClick={copyToClipboard}>
              {t("copy.1")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myaccount;
