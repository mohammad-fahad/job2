import React, { useState, Fragment } from "react";
import VehicleList from "../../components/vehicles/VehicleList";
import VehicleFilter from "../../components/vehicles/VehicleFilter";

export default (props) => {

    return (

        <Fragment>

            <div>
                <VehicleFilter/>
            </div>
            <hr />
            <div>
                <VehicleList {...props} />
            </div>


        </Fragment>

    )
}
