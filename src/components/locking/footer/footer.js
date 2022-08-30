import React, { useState, useEffect } from "react";
import "./footer.css";
import Pdf from "../../../asset/images/pdf.pdf";
import logo1 from "../../../asset/images/logo/logo1.png";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container footerone" style={{ paddingTop: "34px" }} s>
      <div className="">
        <div className="row footer">
          <div className="col-md-4">
            <img className="logo" src={logo1} alt="Logo" />
            <br />
            <span id="centercoin">CENTER COIN</span>
          </div>

          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            <h6>
              {t("Copyright.1")} © {t("2021CENTERCOINE.1")} |{" "}
              {t("AllRightsReserved..1")}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
