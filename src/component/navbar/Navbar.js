import React from "react";
import style from "./Navbar.css";
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
          />
          <a className="shadow">
            <b>LAUNCHES</b>
          </a>
        </div>
        <div>
          <button className="button" onClick={this.refreshPage}>
            Reload Data
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
