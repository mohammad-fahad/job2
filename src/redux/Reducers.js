import { combineReducers } from 'redux';
import settings from './settings/Reducer';
import vehicleReducer from "./vehicles/Reducer";
import assignVehicleReducer from "./vehicles-assignment/Reducer";

const Reducers = combineReducers({
    settings,
    vehicleReducer,
    assignVehicleReducer
});

export default Reducers;
