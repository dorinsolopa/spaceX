import React from "react";
import style from "../flight_list/FlightList";
import { Link } from "react-router-dom";
import Card from "./Card";
import FlightItem from "./flightItem";

class FlightList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      flights: [],
      year: "",
      yearOptions: [],
      sortType: "asc",
    };
  }

  async componentDidMount() {
    const url = "https://api.spacexdata.com/v3/launches";
    const response = await fetch(url);
    const data = await response.json();
    console.log("result--->", data);

    this.setState({ flights: data, loading: false });
    this.mapYears(data);
  }

  changeData = (event) => {
    this.setState({ year: event.target.value });
  };

  onSort = (sortType) => {
    this.setState({ sortType });
  };

  mapYears = (flights) => {
    const yearMap = flights.reduce((acc, curr) => {
      acc[curr.launch_year] = "year";
      return acc;
    }, {});
    // console.log("year---->", yearMap);
    const keys = Object.keys(yearMap);
    // console.log("keys->", keys);
    const options = keys.map((year) => {
      return {
        value: year,
        label: `Year: ${year}`,
      };
    });
    this.setState({ yearOptions: options });
    // console.log("options--->", options);
  };
  render() {
    const { flights, sortType } = this.state;

    const sorted = flights.sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return (
        isReversed * a.launch_date_local.localeCompare(b.launch_date_local)
      );
    });

    const filtered = sorted.filter((item) => {
      if (!this.state.year) {
        return true;
      }
      return item.launch_year === this.state.year;
    });
    return (
      <div className="padding">
        <div className="select">
          <div>
            <select className="select color" onChange={this.changeData}>
              <option value=""> All years</option>
              {this.state.yearOptions.map((item) => {
                return <option value={item.value}>{item.label}</option>;
              })}
            </select>
          </div>
          <div className="space">
            <select
              className="select color "
              onChange={(event) => this.onSort(event.target.value)}
            >
              <option value={"asc"}>Sort Ascending</option>
              <option value={"desc"}>Sort Descending</option>
            </select>
          </div>
        </div>
        <div>
          {filtered.map((item) => {
            return (
              <Link to={`/InfoPage/${item.flight_number}`}>
                <FlightItem item={item} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FlightList;
