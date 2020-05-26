import React from "react";
import "./CardInfo.css";
import FlightItem from "../flight_list/flightItem";
import CardInfo from "./CardInfo";

class InfoPage extends React.Component {
  constructor(props) {
    console.log("rfsd", props);
    super(props);
    this.state = {
      loading: true,
      flight: {},
    };
  }

  async componentDidMount() {
    const flightId = this.props.match.params.flightId;
    const url = `https://api.spacexdata.com/v3/launches/${flightId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("res..", data);
    this.setState({ flight: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return "Loading ...";
    }

    return (
      <div style={{ textAlign: "center" }}>
        <div className="center">
          <FlightItem item={this.state.flight} />
        </div>
        <div>
          <CardInfo item={this.state.flight} />
        </div>
      </div>
    );
  }
}

export default InfoPage;
