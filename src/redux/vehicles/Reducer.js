import {
    ADD_VEHICLE, DELETE_VEHICLE, FETCH_VEHICLE_DETAILS_SUCCESS,
    FETCH_VEHICLE_SUCCESS, UPDATE_VEHICLE_DETAILS
} from "../constants/";
import {UPDATE_VEHICLE, VEHICLE_NAME_LIST} from "../constants";

const vehicles = (state = [], action) => {

    switch (action.type) {
        case FETCH_VEHICLE_SUCCESS:
            return {
                vehicle_list: action.vehicle_list
            };

        case ADD_VEHICLE:
            const addNewVehicles = [
                ...state.vehicle_list,
                {
                    ...action.newVehicle
                },
            ];
            return {
                vehicle_list: addNewVehicles
            };

        case UPDATE_VEHICLE:
            const updateVehicle = state.vehicle_list.map((vehicle) =>
                vehicle._id === action.updateVehicle._id ?
                    {
                        ...vehicle,
                        ...action.updateVehicle
                    }
                    : vehicle );

            return {
                vehicle_list: updateVehicle
            };

        case DELETE_VEHICLE:
            const deleteVehicle = state.vehicle_list.filter((item) => item._id !== action.id);
            return {
                vehicle_list: deleteVehicle
            };

        case FETCH_VEHICLE_DETAILS_SUCCESS:
            return {
                vehicle_details: action.vehicle_details
            };

        case UPDATE_VEHICLE_DETAILS:
            return {
                vehicle_details: action.updateVehicle
            };

        default:
            return state;
    }
};

export default vehicles;
