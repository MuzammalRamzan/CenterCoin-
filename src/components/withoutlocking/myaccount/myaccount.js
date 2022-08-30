import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { contractAddress, abi } from "../../../utils/constant";
import "./myaccount.css";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
function Myaccount() {
  let accountAd;
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
  const { t, i18n } = useTranslation();
  const [withdrawamount, setwithdrawamount] = useState(0);

  const getData = async () => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let totalupline = await contract.methods.Total_Upline_Earned().call();
      setuplineearn(totalupline);

      let uplinereward = await contract.methods.Users(accountAd).call();
      SetReferralReward(uplinereward.upline_Reward);
      setWithdrawAbleReward(uplinereward.WithdrawAbleReward);
      setuserstaked(web3.utils.fromWei(uplinereward.DepositeToken));
      setnumberodreferral(uplinereward.referrals);
    } catch (error) {
      console.log("Error while checking locked account", error);
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
  const enterAmountCall = async (e) => {
    try {
      setwithdrawamount(e.target.value);
    } catch (error) {
      console.log("Error while checking locked account");
    }
  };
  const WithdrawReward = async () => {
    const web3 = window.web3;
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      if (WithdrawAbleReward > 0 && withdrawamount >= 10) {
        let uplinereward = await contract.methods
          .WithdrawReward(web3.utils.toWei(withdrawamount))
          .send({
            from: account,
          })
          .then(async (output) => {
            toast.success("Transaction Completed");
          })
          .catch((e) => {
            toast.error(e.message);
          });
      } else {
        toast("You do not Have sufficient balance to withdraw");
      }
    } catch (error) {
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
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="mystaked">
            <div className="row">
              <span className="mystakedtext">
                {t("WithdrawableReward12.1")}{" "}
              </span>
              <span className="mystakedvalue">{WithdrawAbleReward}</span>
              <span className="mystakedtext">{t("UserTotalDeposit.1")}</span>
              <span className="mystakedvalue">{userstaked}</span>
              <input className="stakeinput" onChange={enterAmountCall} />
              <button className="btn btn-primary" onClick={WithdrawReward}>
                {t("Withdraw.1")}
              </button>
            </div>
          </div>
          <div className="row" style={{ color: "white" }}>
            <h1>{t("YourStake.1")}</h1>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="myrefferaltablee">
            <span className="refferaltext">{t("YourReferralLink.1")}</span>
            <div className="row">
              <div className="col-sm-10">
                <input
                  placeholder="Please connect to your wallet"
                  value={`${window.location.protocol}//${window.location.host}/login?ref=${account}`}
                />
              </div>
              <div className="col-sm-2">
                <button
                  className="copy"
                  id="textAreaRef"
                  onClick={copyToClipboard}
                >
                  {t("copy.1")}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <span className="refferaltext">
                  {t("TotalReferralEarned.1")}
                </span>
                <span className="refferalvalue">{referralReward}</span>
              </div>
              <div className="col-4">
                <span className="refferaltext">
                  {t("TotalReferralWithdrawn.1")}
                </span>
                <span className="refferalvalue">0</span>
              </div>
              <div className="col-4">
                <span className="refferaltext">{t("InvitedUsersbyYou.1")}</span>
                <span className="refferalvalue">{numberodreferral}</span>
              </div>
            </div>
            <div
              className="row"
              style={{
                padding: "10px 0px",
              }}
            >
              <div className="col">
                <p>{t("EarnforpromotionBNBstake.1")}</p>
                <p>{t("Youwillreceive.1")}:</p>
                <p>{t("5%fromeachlevel1referraldepositss.1")}</p>
                <p>{t("2.5%fromeachlevel2referraldeposits.1")}</p>
                <p>{t("0.5%fromeachlevel3referraldeposits.1")}</p>
                <p>
                  {t("Note.1")}!{" "}
                  {t("Youneedtohaveatleast1deposittostartreceiveearnings.1")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myaccount;
