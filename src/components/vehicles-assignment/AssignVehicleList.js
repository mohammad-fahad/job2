import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAssignVehicleList} from "../../redux/vehicles-assignment/Action";
import {Col, Row} from "reactstrap";
import Vehicle from "../vehicles/Vehicle";
import AssignVehicle from "./AssignVehicle";


const AssignVehicleList = () => {

    const getVisibleAssignVehicles = (assign_vehicles) => {
        if(assign_vehicles === undefined){
            return [];
        }else{
            return assign_vehicles;
        }
    };

    const assign_vehicles = getVisibleAssignVehicles(
        useSelector((state) => state.assignVehicleReducer.assign_vehicle_list)
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAssignVehicleList());
    }, [dispatch]);


    console.log(assign_vehicles);

    return (
        <div>
            <Row className="align-items-center" style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2, color: "#3E5569", fontWeight: "bold", fontSize: 12}}>
                <Col xs={3} className={"text-center"}>
                    VEHICLE
                </Col>
                <Col xs={2}  className={"text-center"}>
                    STATUS
                </Col>
                <Col xs={2} className={"text-center"}>
                    Driver
                </Col>
                <Col xs={4} className={"text-center"}>
                    DATE
                </Col>
                <Col xs={1} className={"text-center"}>
                    ACTION
                </Col>
            </Row>

            {assign_vehicles.map((list) => (
                <AssignVehicle
                    key={list._id}
                    {...list}
                />
            ))}

        </div>
    )

};

export default AssignVehicleList;
