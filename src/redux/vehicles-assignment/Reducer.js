import {FETCH_VEHICLE_ASSIGN_SUCCESS} from "../constants";


const assign_vehicles = (state = [], action) => {
    switch (action.type) {
        case FETCH_VEHICLE_ASSIGN_SUCCESS:
            return {
                assign_vehicle_list: action.assign_vehicle_list
            };

        default:
            return state;
    }
};


export default assign_vehicles;
