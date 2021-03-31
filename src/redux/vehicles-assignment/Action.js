import {FETCH_VEHICLE_ASSIGN_SUCCESS} from "../constants";

export const fetchAssignVehicleList = () => {
    return dispatch => {
        fetch("/api/assign_vehicle")
            .then(response => response.json())
            .then((result) => {
                if (result.success) {
                    dispatch({
                        type: FETCH_VEHICLE_ASSIGN_SUCCESS,
                        assign_vehicle_list: result.result,
                    })
                } else {
                    console.log(result.message);
                }
            });
    }
};
