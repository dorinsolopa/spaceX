import React from "react";
import style from "./Navbar.css";
import { Redirect } from "react-router-dom";
class Navbar extends React.Component {
  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div className="flex-container">
        <div>
          <img
            src={require("../../assets/spacex-logo.png")}
            className={style.img}
            href="/dashboard"
          />
          <a className="shadow">LAUNCHES</a>
        </div>
        <div>
          <button className="button" onClick={this.refreshPage}>
            Reload Data
            <img
              style={{ width: "13px", height: "auto", alignItems: "right" }}
              src={require("../../assets/icon/refresh.png")}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
