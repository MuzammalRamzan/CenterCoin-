import React, { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import {
  contractAddress,
  abi,
  tokenAddres,
  tokenAbi,
  refDefaultAddress,
} from "../../../utils/constant";
import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";
import "./bannerendplan.css";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
// import logo from "../../asset/images/logo.png";
import logo from "../../../asset/images/logo.png";
import menuIcon from "../../../asset/images/menuIcon.png";
import { Container } from "react-bootstrap";

function BannerEndPlan({ setLoading }) {
  let accountAd;
  let first = useRef();
  let second = useRef();
  let third = useRef();
  // let [color, setColor] = useState("#ffffff");
  const { t, i18n } = useTranslation();
  let [apbtntext1, setApbtntext1] = useState("Approve");
  let [apbtntext2, setApbtntext2] = useState("Approve");
  let [apbtntext3, setApbtntext3] = useState("Approve");
  let [inbtntext1, setInbtntext1] = useState("Invest");
  let [inbtntext2, setInbtntext2] = useState("Invest");
  let [inbtntext3, setInbtntext3] = useState("Invest");
  const [account, setAccount] = useState("Connect");
  const [upline, setUpline] = useState(refDefaultAddress);
  const [disable, setDisable] = useState(false);
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [dailyProfit1, set1dailyProfit] = useState(0.074);
  const [totalReturn1, set1TotalReturn] = useState(20);
  const [withdrawn1, set1withdrawn] = useState(0);
  const [withdrawnAble1, set1withdrawAble] = useState(0);
  const [enterAmount1, set1EnterAmount] = useState(0);
  const [fourteenDaysReward1, set1fourteenDaysReward] = useState(0);
  const [days1, set1days] = useState(3);

  const [dailyProfit2, set2dailyProfit] = useState(0.095);
  const [totalReturn2, set2TotalReturn] = useState(35);
  const [withdrawn2, set2withdrawn] = useState(0);
  const [withdrawnAble2, set2withdrawAble] = useState(0);
  const [enterAmount2, set2EnterAmount] = useState(0);
  const [fourteenDaysReward2, set2fourteenDaysReward] = useState(0);
  const [days2, set2days] = useState(4);

  const [dailyProfit3, set3dailyProfit] = useState(0.123);
  const [totalReturn3, set3TotalReturn] = useState(90);
  const [withdrawn3, set3withdrawn] = useState(0);
  const [withdrawnAble3, set3withdrawAble] = useState(0);
  const [enterAmount3, set3EnterAmount] = useState(0);
  const [fourteenDaysReward3, set3fourteenDaysReward] = useState(0);
  const [days3, set3days] = useState(5);

  const DepositPlan3 = async (e) => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let RemainingTokens = await tokenContract.methods
        .balanceOf(account)
        .call();
      let ActualRemainingTokens = await web3.utils.fromWei(RemainingTokens);
      if (enterAmount3 >= 1) {
        if (parseInt(enterAmount3) > ActualRemainingTokens) {
          toast.error("Oops! Your Entered Amount is greater than Your Balance");
        } else {
          setApbtntext3("Wait While Processing");
          let Accountinfo = await tokenContract.methods
            .allowance(account, contractAddress)
            .call();
          setLoading(true);
          await tokenContract.methods
            .approve(contractAddress, web3.utils.toWei("" + enterAmount3))
            .send({
              from: account,
            })
            .on("receipt", () => {
              setLoading(false);

              setDisable2(!disable);
            })

            .then(async (output) => {
              setApbtntext3("Approve");
              setLoading(false);

              toast.success("Transaction Approved");
            })
            .catch((e) => {
              setLoading(false);

              toast.error(e.message);
            });
        }
      } else {
        toast("Minimum amount is 1 Center Coin");
      }
    } catch (error) {
      setLoading(false);

      toast.error("Error while checking locked account");
    }
  };
  const DepositPlan2 = async (e) => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let RemainingTokens = await tokenContract.methods
        .balanceOf(account)
        .call();
      let ActualRemainingTokens = await web3.utils.fromWei(RemainingTokens);
      if (enterAmount2 >= 1) {
        if (parseInt(enterAmount2) > ActualRemainingTokens) {
          toast.error("Oops! Your Entered Amount is greater than Your Balance");
        } else {
          setApbtntext2("Wait While Processing");
          let Accountinfo = await tokenContract.methods
            .allowance(account, contractAddress)
            .call();
          setLoading(true);
          await tokenContract.methods
            .approve(contractAddress, web3.utils.toWei("" + enterAmount2))
            .send({
              from: account,
            })
            .on("receipt", () => {
              setLoading(false);

              setDisable1(!disable);
            })

            .then(async (output) => {
              setApbtntext2("Approve");
              setLoading(false);

              toast.success("Transaction Approved");
            })
            .catch((e) => {
              setLoading(false);

              toast.error(e.message);
            });
        }
      } else {
        toast("Minimum amount is 1 Center Coin");
      }
    } catch (error) {
      setLoading(false);

      toast.error("Error while checking locked account");
    }
  };
  const DepositPlan1 = async (e) => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let RemainingTokens = await tokenContract.methods
        .balanceOf(account)
        .call();
      let ActualRemainingTokens = await web3.utils.fromWei(RemainingTokens);
      if (enterAmount1 >= 1) {
        if (parseInt(enterAmount1) > ActualRemainingTokens) {
          toast.error("Oops! Your Entered Amount is greater than Your Balance");
        } else {
          setApbtntext1("Wait While Processing");
          let Accountinfo = await tokenContract.methods
            .allowance(account, contractAddress)
            .call();
          setLoading(true);
          await tokenContract.methods
            .approve(contractAddress, web3.utils.toWei("" + enterAmount1))
            .send({
              from: account,
            })
            .on("receipt", () => {
              setDisable(!disable);
              setLoading(false);
            })
            .then(async (output) => {
              setApbtntext1("Approve");
              toast.success("Transaction Approved");
            })
            .catch((e) => {
              setLoading(false);
              toast.error(e.message);
            });
        }
      } else {
        toast("Minimum amount is 1 Center Coin");
      }
    } catch (error) {
      setLoading(false);

      toast.error("Error while checking locked account");
    }
  };
  // Invest Function
  const Invest = async (e) => {
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
      let RemainingTokens = await tokenContract.methods
        .balanceOf(account)
        .call();
      let ActualRemainingTokens = await web3.utils.fromWei(RemainingTokens);
      if (name === "planone") {
        if (enterAmount1 >= 1) {
          setLoading(true);

          contract.methods
            .invest(upline, days1, web3.utils.toWei(enterAmount1))
            .send({
              from: account,
            })
            .on("receipt", () => {
              setDisable(!disable);
              setLoading(false);

              first.current.value = "";
            })
            .then(async (output) => {
              toast.success("Transaction Completed");
              setLoading(false);
            })
            .catch((e) => {
              setLoading(false);
              toast.error(e.message);
            });
        } else {
          toast("Minimum amount is 1 Center Coin");
        }
      } else if (name === "plantwo") {
        if (enterAmount2 >= 1) {
          setLoading(true);
          contract.methods
            .invest(upline, days2, web3.utils.toWei(enterAmount2))
            .send({
              from: account,
            })
            .on("receipt", () => {
              setDisable1(!disable1);
              setLoading(false);
              second.current.value = "";
            })
            .then(async (output) => {
              setLoading(false);

              toast.success("Transaction Completed");
            })
            .catch((e) => {
              setLoading(false);
              toast.error(e.message);
            });
        } else {
          toast("Minimum amount is 1 Center Coin");
        }
      } else if (name === "planthree") {
        if (enterAmount3 >= 1) {
          setLoading(true);

          await contract.methods
            .invest(upline, days3, web3.utils.toWei(enterAmount3))
            .send({
              from: account,
            })
            .on("receipt", () => {
              setDisable2(!disable2);
              setLoading(false);

              third.current.value = "";
            })
            .then(async (output) => {
              setLoading(false);

              toast.success("Transaction Completed");
            })
            .catch((e) => {
              setLoading(false);
              toast.error(e.message);
            });
        } else {
          toast("Minimum amount is 1 Center Coin");
        }
      }
    } catch (error) {
      console.log("response", error);
      setLoading(false);

      toast.error("Error while checking locked account");
    }
  };

  const unstake = async () => {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let users = await contract.methods.Users(account).call();
      if (users.withrawableDepositeAmount > 0) {
        if (users.WithdrawAbleReward <= 0) {
          let dailyprofit1 = await contract.methods
            .Withdraw_Staking_Amount()
            .send({
              from: account,
            })
            .then(async (output) => {
              toast.success("Transaction Completed");
            })
            .catch((e) => {
              console.log("response", e);
              toast.error(e.message);
            });
        } else {
          toast("withdraw reward first");
        }
      } else {
        toast("No Claim available");
      }
    } catch (error) {
      console.log("response", error);
    }
  };
  const checkReward = async (e) => {
    try {
      console.log("deposite", e.target.name);
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let rewards = await contract.methods
        .Rewards()
        .send({
          from: account,
        })
        .then(async (output) => {
          toast.success("Transaction Completed");
        })
        .catch((e) => {
          console.log("response", e);
          toast.error(e.message);
        });
      // }
    } catch (error) {
      console.log("response", error);
    }
  };

  // For amount 1
  const enter1AmountCall = async (e) => {
    const web3 = window.web3;
    let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
    let Accountinfo = await tokenContract.methods
      .allowance(account, contractAddress)
      .call();
    let finalAmount = await web3.utils.fromWei(Accountinfo);
    let valueEntered = e.target.value;
    if (parseFloat(valueEntered) <= parseFloat(finalAmount)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      if (name === "first_input") {
        let valueEntered = e.target.value;
        let value = e.target.value;
        await set1EnterAmount(value);
        let check_reward;
        if (e.target.value != "") {
          check_reward = await contract.methods
            .getResult(days1, web3.utils.toWei(e.target.value))
            .call();
        } else {
          set1withdrawAble(0);
        }
        set1withdrawAble(
          formatThousands(web3.utils.fromWei(check_reward.profit))
        );
      }
    } catch (error) {
      console.log("Error while checking locked account", error);
    }
  };
  // For Amount 2

  const enter2AmountCall = async (e) => {
    const web3 = window.web3;
    let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
    let Accountinfo = await tokenContract.methods
      .allowance(account, contractAddress)
      .call();
    let finalAmount = await web3.utils.fromWei(Accountinfo);

    let valueEntered = e.target.value;
    if (parseFloat(valueEntered) <= parseFloat(finalAmount)) {
      setDisable1(true);
    } else {
      setDisable1(false);
    }
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      if (name === "second_input") {
        let value = e.target.value;
        set2EnterAmount(value);
        let check_reward;
        if (e.target.value != "") {
          check_reward = await contract.methods
            .getResult(days2, web3.utils.toWei(e.target.value))
            .call();
        } else {
          set2withdrawAble(0);
        }
        set2withdrawAble(
          formatThousands(web3.utils.fromWei(check_reward.profit))
        );
      }
    } catch (error) {
      console.log("Error while checking locked account", error);
    }
  };
  // For Amount 3

  const enter3AmountCall = async (e) => {
    const web3 = window.web3;
    let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddres);
    let Accountinfo = await tokenContract.methods
      .allowance(account, contractAddress)
      .call();
    let finalAmount = await web3.utils.fromWei(Accountinfo);

    let valueEntered = e.target.value;
    if (parseFloat(valueEntered) <= parseFloat(finalAmount)) {
      setDisable2(true);
    } else {
      setDisable2(false);
    }
    try {
      const name = e.target.name;
      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      if (name === "third_input") {
        let valueEntered = e.target.value;
        let value = e.target.value;
        set3EnterAmount(value);
        let check_reward;
        if (e.target.value != "") {
          check_reward = await contract.methods
            .getResult(days3, web3.utils.toWei(e.target.value))
            .call();
        } else {
          check_reward = 0;
          set3withdrawAble(check_reward);
        }
        set3withdrawAble(
          formatThousands(web3.utils.fromWei(check_reward.profit))
        );
      }
    } catch (error) {
      console.log("Error while checking locked account", error);
    }
  };
  function formatThousands(num) {
    var numbr = parseFloat(parseFloat(num).toFixed(2));
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
  useEffect(() => {
    setInterval(() => {
      loadWeb3();
    }, 2000);
  }, []);

  return (
    <div className="container-fluid">
      <div className="container banner2">
        <div className="row">
          <div className="col-sm-4">
            <div className="bannerendcard2">
              <div className="col-md-12" id="plan1">
                <span>{t("PlanD.1")}</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("DailyProfit.1")}</span>
                  <span className="bannerendvalue">{dailyProfit1}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">{t("TotalReturn.1")}</span>
                  <span className="bannerendvalue">{totalReturn1}%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("Withdrawtime.1")}</span>
                  <span className="bannerendvalue">{t("AnyTime.1")}</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">{t("month.1")}</span>
                  <span className="bannerendvalue">9</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("EnterAmount.1")}</span>
                  <input
                    name="first_input"
                    ref={first}
                    className="stakeinput form-control mx-3"
                    placeholder="0"
                    type="Number"
                    onChange={enter1AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">
                    {t("In9monthsyouwillget.1")}
                  </span>
                  <span className="bannerendvalue1 py-2">{withdrawnAble1}</span>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  disabled={disable}
                  className="btn btn-gradd btn-block "
                  name="planone"
                  onClick={DepositPlan1}
                >
                  {t("Approve.1")}
                </button>
                <button
                  type="button"
                  disabled={!disable}
                  className="btn btn-gradd btn-block"
                  name="planone"
                  onClick={Invest}
                >
                  {t("STAKE.1")}
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bannerendcard2">
              <div className="col-md-12" id="plan1">
                <span>{t("PlanE.1")}</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("DailyProfit.1")}</span>
                  <span className="bannerendvalue">{dailyProfit2}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">{t("TotalReturn.1")}</span>
                  <span className="bannerendvalue">{totalReturn2}%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("Withdrawtime.1")}</span>
                  <span className="bannerendvalue">{t("AnyTime.1")}</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">{t("month.1")}</span>
                  <span className="bannerendvalue">12</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("EnterAmount.1")}</span>
                  <input
                    name="second_input"
                    ref={second}
                    className="stakeinput form-control mx-3"
                    placeholder="0"
                    type="Number"
                    onChange={enter2AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">
                    {t("In12monthsyouwillget.1")}
                  </span>
                  <span className="bannerendvalue1 py-2">{withdrawnAble2}</span>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  disabled={disable1}
                  className="btn btn-gradd btn-block "
                  name="plantwo"
                  onClick={DepositPlan2}
                >
                  {t("Approve.1")}
                </button>
                <button
                  type="button"
                  disabled={!disable1}
                  className="btn btn-gradd btn-block"
                  name="plantwo"
                  onClick={Invest}
                >
                  {t("STAKE.1")}
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bannerendcard2">
              <div className="col-md-12" id="plan1">
                <span>{t("PlanF.1")}</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("DailyProfit.1")}</span>
                  <span className="bannerendvalue">{dailyProfit3}%</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">{t("TotalReturn.1")}</span>
                  <span className="bannerendvalue">{totalReturn3}%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("Withdrawtime.1")}</span>
                  <span className="bannerendvalue">{t("AnyTime.1")}</span>
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">{t("month.1")}</span>
                  <span className="bannerendvalue">24</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="bannerendprofit">{t("EnterAmount.1")}</span>
                  <input
                    name="third_input"
                    className="stakeinput btn-secondary form-control  mx-3"
                    placeholder="0"
                    // ref={third}
                    type="Number"
                    onChange={enter3AmountCall}
                  />
                </div>
                <div className="col-6">
                  <span className="bannerendprofit">
                    {t("In24monthsyouwillget.1")}
                  </span>
                  <span className="bannerendvalue1 py-2">{withdrawnAble3}</span>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  disabled={disable2}
                  className="btn btn-gradd btn-block "
                  name="planthree"
                  onClick={DepositPlan3}
                >
                  {t("Approve.1")}
                </button>
                <button
                  type="button"
                  disabled={!disable2}
                  className="btn btn-gradd btn-block"
                  name="planthree"
                  onClick={Invest}
                >
                  {t("STAKE.1")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <span className="bannerendnwarnings">
            1. {t("Important.1")}:{" "}
            {t(
              "PlansreturnarefloatandDailyProfitforanewdepositwillincreasebydifferentPercentage.1"
            )}
          </span>
          <span className="bannerendnwarnings">
            2.{" "}
            {t(
              "Minimumdepositamountis1KnightDogeandyoucanhavemultipledeposits.1"
            )}
          </span>
          <span className="bannerendnwarnings">
            3. {t("Earningseverymoment,withdrawinstantlyanytime.1")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BannerEndPlan;
