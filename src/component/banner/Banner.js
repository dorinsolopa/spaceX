import React from "react";
import style from "./Banner.css";
class Banner extends React.Component {
  render() {
    return (
      <div >
        <img
          src={require("../../assets/img/launch-home.png")}
          className="img"
        />
      </div>
    );
  }
}

export default Banner;
