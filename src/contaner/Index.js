import React, { useState } from "react";
import "../App.css";
// import Navbar from '../components/locking/navbar/navbar';
import Info from "../components/locking/info/info";
import Banner from "../components/locking/banner/banner";
import BannerEndPlan from "../components/locking/banner2/bannerendplan";
import Myaccount from "../components/locking/myaccount/myaccount";
import Sponsor from "../components/locking/sponsors/sponsor";
import Footer from "../components/locking/footer/footer";
import Header from "../components/locking/header/header";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
function Index() {
  let [loading, setLoading] = useState(false);

  return (
    <div>
      <ToastContainer />
      {/* <Navbar /> */}
      {loading ? (
        <div className="loadingBarContainer">
          <h1>Wait While Processing...</h1>
          <CircularProgress className="loadingBar" color="warning" size={200} />
        </div>
      ) : (
        <></>
      )}
      <Info />
      <Banner setLoading={setLoading} />
      <BannerEndPlan setLoading={setLoading} />
      <Myaccount setLoading={setLoading} />
      {/* <Sponsor /> */}
      <Footer />
    </div>
  );
}

export default Index;
