import React from "react";
import "./footer.css";
import Pdf from "../../../asset/images/pdf.pdf";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-sm">
              <img
                className="logo"
                // src={logo1}
                alt="Logo"
                class={{ width: "75px", height: "75px" }}
              />
            </div>
            <div className="col-sm">
              <h6>{t("Poweredby.1")}</h6>
              <a href="https://www.binance.org/en/smartChain">
                {" "}
                {t("BinanceSmartChain.1")}
              </a>
            </div>
            <div className="col-sm">
              <h6> {t("AuditedbyHazeCrypto.1")} </h6>
              <a href={Pdf} target="_blank">
                {" "}
                {t("DownloadAuditPDFReport.1")}{" "}
              </a>
            </div>
            <div className="col-sm">
              <h6> © {t("2021Allrightsreserved.1")}. </h6>
              <a href="#"> https://sthstake.pro </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
