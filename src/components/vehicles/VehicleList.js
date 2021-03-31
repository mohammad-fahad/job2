import React, { useState, useEffect } from "react";
import { SocketIO } from "../socketio/SocketIO";
import {
    fetchVehiclesList,
    addVehicleFromSocket,
    updateVehicleFromSocket,
    deleteVehicleFromSocket
} from "../../redux/vehicles/Action";
import { useSelector, useDispatch } from "react-redux";
import Vehicle from "./Vehicle";
import { Row, Col } from 'reactstrap';

const VehicleList = () => {

    useEffect(() => {
        const socket = SocketIO.Socket();
        socket.on('add_vehicle', (data) => {
            dispatch(addVehicleFromSocket(data));
        });
        socket.on('update_vehicle', (data) => {
            dispatch(updateVehicleFromSocket(data));
        });
        socket.on('delete_vehicle', (data) => {
            dispatch(deleteVehicleFromSocket(data));
        });
        return () => {
            socket.removeAllListeners('add_vehicle');
            socket.removeAllListeners('update_vehicle');
            socket.removeAllListeners('delete_vehicle');
        }
    },[]);

    const getVisibleVehicles = (vehicles) => {
        if(vehicles === undefined){
            return [];
        }else{
            return vehicles;
        }
    };

    const vehicles = getVisibleVehicles(
        useSelector((state) => state.vehicleReducer.vehicle_list)
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVehiclesList());
    }, [dispatch]);


    return (
        <div>

            <Row className="align-items-center" style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2, color: "#3E5569", fontWeight: "bold", fontSize: 12}}>
                <Col xs={3} className={"text-center"}>
                    VEHICLE
                </Col>
                <Col xs={1} className={"text-center"}>
                    TYPE
                </Col>
                <Col xs={2} className={"text-center"}>
                    STATUS
                </Col>
                <Col xs={2} className={"text-center"}>
                    HEALTH RATE
                </Col>
                <Col xs={2} className={"text-center"}>
                    TEMPERATURE
                </Col>
                <Col xs={2} className={"text-center"}>
                    ACTION
                </Col>
            </Row>

            {vehicles.map((vehicle) => (
                <Vehicle
                    key={vehicle._id}
                    {...vehicle}
                />
            ))}

        </div>
    )
};

export default VehicleList;
