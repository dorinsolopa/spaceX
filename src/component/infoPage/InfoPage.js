import React from "react";
import { Link } from "react-router-dom";
import Card from "../flight_list/Card";
import FlightItem from "../flight_list/flightItem";
import CardInfo from "./CardInfo"

class InfoPage extends React.Component {
  constructor(props) {
    console.log("rfsd", props);
    super(props);
    this.state = {
      loading: true,
      flight: {},
      data:""
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
        <FlightItem item={this.state.flight} />
        <CardInfo item={this.state.flight}/>
      </div>
    );
  }
}

export default InfoPage;
