import React from "react";
import Card from "./Card";

const FlightItem = (props) => {
  const item = props.item;
  return (
    <Card >
      <div className="size">
        <b> #{item.flight_number}</b>
        <div className="size">{item.mission_name}</div>
      </div>
      <div>
        <small>{new Date(item.launch_date_local).toDateString()}</small>
        <div style={{ textAlign: "center" }}>
          <b>{item.rocket.rocket_name}</b>
        </div>
      </div>
    </Card>
  );
};

export default FlightItem;
