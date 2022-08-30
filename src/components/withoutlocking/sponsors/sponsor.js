import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { contractAddress } from "../../../utils/constant";
import "./sponsor.css";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import footer from "./footer.png";
function Sponsor() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="sponsors">{t("SPONSORS.1")}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <img className="sponsor-image" src={footer} alt="sposor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
