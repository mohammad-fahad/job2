import {
    FETCH_VEHICLE_SUCCESS, VEHICLE_NAME_LIST
} from "../constants/";
import {
    ADD_VEHICLE,
    DELETE_VEHICLE,
    FETCH_VEHICLE_DETAILS_SUCCESS,
    UPDATE_VEHICLE,
    UPDATE_VEHICLE_DETAILS
} from "../constants";

export const fetchVehiclesList = () => {
    return dispatch => {
        fetch("/api/vehicle")
            .then(response => response.json())
            .then((result) => {
                if (result.success) {
                    dispatch({
                        type: FETCH_VEHICLE_SUCCESS,
                        vehicle_list: result.result,
                    })
                } else {
                    console.log(result.message);
                }
            });
    }
};

export const addVehicleFromSocket = (vehicle) => {
    return dispatch => {
        dispatch({
            type: ADD_VEHICLE,
            newVehicle: vehicle.result,
        })
    };
};

export const updateVehicleFromSocket = (vehicle) => {
    return dispatch => {
        dispatch({
            type: UPDATE_VEHICLE,
            updateVehicle: vehicle.result,
        })
    };
};

export const deleteVehicleFromSocket = (vehicle) => {
    return dispatch => {
        dispatch({
            type: DELETE_VEHICLE,
            id: vehicle.result._id,
        })
    };
};

export const fetchVehiclesDetails = (id) => {
    return dispatch => {
        fetch("/api/vehicle/"+id)
            .then(response => response.json())
            .then((result) => {
                if (result.success) {
                    dispatch({
                        type: FETCH_VEHICLE_DETAILS_SUCCESS,
                        vehicle_details: result.result,
                    })
                } else {
                    console.log(result.message);
                }
            });
    }
};

export const updateVehicleDetailsFromSocket = (vehicle) => {
    return dispatch => {
        dispatch({
            type: UPDATE_VEHICLE_DETAILS,
            updateVehicle: vehicle.result,
        })
    };
};
