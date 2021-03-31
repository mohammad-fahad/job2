import React, {Fragment} from "react";
import AssignVehicleList from "../../components/vehicles-assignment/AssignVehicleList";
import AssignVehicleFilter from "../../components/vehicles-assignment/AssignVehicleFilter";

export default (props) => {

    return (

        <Fragment>

            <div>
                <AssignVehicleFilter/>
            </div>
            <hr />
            <div>
                <AssignVehicleList />
            </div>

        </Fragment>

    )
}
