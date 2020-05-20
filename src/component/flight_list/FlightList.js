import React from "react";
import style from "../flight_list/FlightList";

class FlightList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      flights: [],
      year: "",
      yearOptions: [],
      sortType: "",
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

    const filtered = sorted.filter((item)=>{
return item.launch_year === this.state.year
    })
    return (
      <div>
        <div className="select">
          <div>
            <select className="select" onChange={this.changeData}>
              {this.state.yearOptions.map((item) => {
                return <option value={item.value}>{item.label}</option>;
              })}
            </select>
          </div>
          <div>
            <select onChange={(event) => this.onSort(event.target.value)}>
              <option value={"asc"}>Sort Asc</option>
              <option value={"desc"}>Sort Desc</option>
            </select>
          </div>
        </div>
        <div>
          {filtered.map((item) => {
            return (
              <div className="card">
                <div>#{item.flight_number}</div>
                <div>{item.mission_name}</div>
                <div>
                  <small>
                    {new Date(item.launch_date_local).toDateString()}
                  </small>
                  <div>{item.rocket.rocket_name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FlightList;
