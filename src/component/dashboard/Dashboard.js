import React from "react"
import Banner from "../banner/Banner"
import FlightList from "../flight_list/FlightList"
import style from "../flight_list/FlightList.css"

class Dashboard extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="flex">
                <Banner/>
                <FlightList/>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;