import "./home.css";
import { useState } from "react";
import Particles from "react-particles-js";
import center3 from "../asset/images/main-image/center3.PNG";
import blk from "../asset/images/main-image/Token1.png";
import blk13 from "../asset/images/main-image/seller.png";
import { GoArrowRight } from "react-icons/go";
import { GoPrimitiveDot } from "react-icons/go";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import YoutubeEmbed from "./youtubeplayer";
function Home() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const [youtubeplayer, setyoutubeplayer] = useState(false);
  const clickyoutube = () => {
    console.log("Here");
    setyoutubeplayer(true);
  };
  function handleClick() {
    history.push("/without");
  }
  return (
    <div className="container-fluid homeone">
      <Particles
        style={{
          position: "absolute",
          position: "absolute",
          left: "0px",
          zIndex: "0",
        }}
        height="300%"
        width="100%"
        params={{
          particles: {
            color: { value: "#ffffff" },
            line_linked: { color: { value: "#fff000" } },
            number: { value: 100 },
            size: { value: 3 },
          },
        }}
      ></Particles>

      <div className="container">
        <div className="row">
          <div className="col btechhead">{t("DecentralizedExchange.1")}</div>
        </div>
        <div className="row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "3rem 0px 2rem",
            }}
          >
            <p className="paragraph">
              {t(
                "CenterSwapisaprotocoldesignedtofacilitateautomaticexchangetransactionsbetweenEthereum(ETH)andERC20tokens,andtheprotocolcanbeutilizedifadecentralizedwalletisinstalled.ThetypesoftransactionsthatcanbeexecutedareETHandERC20.PricefluctuationsbetweenETHandERC20arebasedontherelativityoftheliquiditypoolinthecontract,andtransactionsbetweenERC-20andERC-20arealsosupported..1"
              )}
            </p>
          </div>
          <div className="col-md-6">
            <img className="main-imged" src={blk} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col btechhead">{t("Centerpool.1")}</div>
        </div>

        <div className="row">
          <div className="col-md-7 textmaster">
            <p className="paragraph">
              {t(
                "CenterCoinprovidesastakingpoolandbasicallyoffersrewardsbasedonmarketusers'paymentfees..1"
              )}
            </p>
            <br />
            <h4 style={{ display: "flex", justifyContent: "left" }}>
              {t("Theoverallprocessisasfollows..1")}
            </h4>
            <br />
            <p className="paragraph">
              1.
              {t(
                "TheCenterCoinholdersupportsstakingbasedonsmartcontactinthecenterpool.1"
              )}
            </p>
            <p className="paragraph">
              2.
              {t(
                "Marketusers'transactionsandpaymentfeesincurredintheCenterDEXmarketandtheNFTmarketareallocatedtotheCenterPool..1"
              )}
            </p>
            <p className="paragraph">
              3. {t("TheCenterCoinstakerwillberewardedwithafee-basedreward..1")}
            </p>
            <p className="paragraph">
              4.
              {t(
                "CompensationispaidaccordingtotheAPYdeterminedbythefoundation,whichhasvolatilitydependingontheparticipant..1"
              )}
            </p>
          </div>
          <div className="col-md-5">
            <img className="main-imged3" src={center3} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1 className="btechhead">{t("NFTMarket.1")} </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-7"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "3rem 0px 2rem",
            }}
          >
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t("CenterCoinwillsupporttheNFTmarket..1")}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t("UsersloginusingCenterWallettoproceedwiththetransaction..1")}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t("PaymentfeeETH.1")}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t("paymenttokenCenterCoin.1")}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t(
                "Itsupportsfixedpricesales,fallingpricesales,orauctionpricesales..1"
              )}
            </p>
            <p className="paragraph" style={{ paddingLeft: "4px" }}>
              <GoArrowRight size={30} style={{ paddingLeft: "4px" }} />
              {t(
                "Inthecaseofanauction,biddingconditionsmustbepresented,andinthecaseofafallingprice,buyerscanpurchase..1"
              )}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t("Pricesystem.1")}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t(
                "ThecurrentpricestartsatThestartingpriceandgraduallyfallsuntilitreachesthebottomprice..1"
              )}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t(
                "Itisablockchainbasedmarket,andusersusesmartcontacttopromotetransactíons..1"
              )}
            </p>
            <p className="paragraph">
              <GoArrowRight size={30} />
              {t(
                "TheNFTofThemarketisownedbyTheownerandiskeptintheownerwallet..1"
              )}
            </p>
          </div>
          <div className="col-lg-3">
            <img className="main-img1" src={blk13} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="btechhead"> {t("5Game.1")} </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <YoutubeEmbed embedId="70xp6bCU3ms" />
          </div>
          <div className="col-md-6">
            <p className="paragraph">
              {t(
                "ThetransactionsforallproductsthatusedtheCenterCoinasameansofpaymentarerecordedanditispaidasacompensationforverifyingthisrecord.Itisanenvironmentwheregameuserspartipateintheverificationoftheblockchainjustbyrunningthegamesandarerewardedinreturn..1"
              )}
            </p>
            <p className="paragraph">
              {t(
                "ThegameusercanusetheacquiredCenterCoinasapaymentmeansforacquiringalltheproductsandservicesinthegame.Moreover,theycanuseitasapaymentmethodforallproductsandservicesellersparticipatinginthetime-playenvironment..1"
              )}
            </p>
            <h4 id="test">
              <b>{t("GameusersearnCenterCointhroughthefollowingsteps..1")}</b>
            </h4>
            <p className="paragraph">
              <GoPrimitiveDot size={24} />
              {t(
                "walletaddress,startofmeasuringusagetime,verificationprocess..1"
              )}
            </p>
            <p className="paragraph">
              <GoPrimitiveDot size={24} />
              {t("Gameusageperiod.1")} :
              {t("Measurementandverificationoftime(mining).1")},
              {t("Checkingofrealtimeinformation.1")}
            </p>
            <p className="paragraph">
              <GoPrimitiveDot size={24} />
              {t("Endofgame.1")} :{t("Acquisitionanddistributionofcoins.1")},
              {t(
                "sendingcoinstogameuserinformationandelectronicwalletaddress..1"
              )}
            </p>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "40px" }}>
          <div className="col-sm-4 offset-sm-4" id="contacts">
            <a
              href="https://t.me/joinchat/FC0wt0dM2uCsQq7yjKVrdg"
              target="_blank"
            >
              <button type="button" class="btn btn-outline-primary mx-2">
                <i
                  class="fab fa-telegram"
                  style={{
                    margin: "2px",
                  }}
                ></i>
                Telegram
              </button>
            </a>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
