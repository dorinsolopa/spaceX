import React from "react";
import Card from "../flight_list/Card";
import "./CardInfo.css";

const CardInfo = (props) => {
  const item = props.item;
  console.log("item",item)
  return (
    <div>
      <div>
        <div> {item.details}</div>
      </div>
      <div>
        <div>{item.ships.join(", ")}</div>
      </div>
      <div className="grid-container">
      {item.links.flickr_images.map((ex)=>{
          return (
            <img className="width" src={ex} />
          )
      })}
       
      </div>
    </div>
  );
};

export default CardInfo;
