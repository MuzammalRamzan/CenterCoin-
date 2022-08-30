import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./sidebars.css";
function Navbarr() {
  const { t, i18n } = useTranslation();
  let history = useHistory();

  function home() {
    history.push("/");
  }
  function locking() {
    history.push("/locking");
  }
  function withoutlocking() {
    history.push("/without");
  }
  function help() {
    // history.push("/");
    try {
      document.getElementById("contacts").scrollIntoView();
      // window.open("https://arbitech-solutions.business.site/", '_blank');
      // window.open("https://arbitech-solutions.business.site/")
    } catch (error) {
      console.log("Error while connecting metamask", error);
      // alert("Error while connecting metamask");
    }
  }
  return (
    <div>
      <SideNav onSelect={(selected) => {}} className="sidebar">
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home" className="sidebartwo">
          <NavItem eventKey="home" onClick={home}>
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>{t("Home.1")}</NavText>
          </NavItem>

          <NavItem eventKey="withoutLocking" onClick={locking}>
            <NavIcon>
              <i
                className="fas fa-lock-open-alt"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>{t("WithoutLocking.1")}</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
export default Navbarr;
