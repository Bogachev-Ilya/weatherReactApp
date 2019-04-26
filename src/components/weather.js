import React from "react";

const Weather =props =>(
        <div className="infoWeath">
            {props.city &&
            <div>
                <br/>
                <p>Place: {props.city}, {props.country}</p>
                <p>Temperature: {props.temp_c}, feels like: {props.feelslike_c}</p>
                <p>Pressure: {props.pressure}</p>
            </div>
            }
            <p className="error">{props.error}</p>
            </div>
    );

export default Weather;