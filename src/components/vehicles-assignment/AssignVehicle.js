import {Card, CardContent} from "@material-ui/core";
import React from "react";
import {Col, Row} from "reactstrap";
import VehicleStatus from "../vehicles/vehicle_status/VehicleStatus";
import FeatherIcon from "feather-icons-react";
import Moment from 'react-moment';

const AssignVehicle = ({
        vehicle,
        assignedDrivers,
        _id
}) => {

    return (
        <Card variant="outlined" style={{marginTop: 5}} >
            <CardContent style={{padding: 0}}>
                <Row className="align-items-center" style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2}}>
                    <Col xs={3}>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <img src="/images/truck-available.png" width={"42px"}/>
                            </div>
                            <div className="p-2 align-items-center">
                                <div style={{fontSize: 18, fontWeight: "bold", color: "#3E5569"}}>
                                    {vehicle.name}
                                </div>
                                <span style={{fontSize: 12, color: "#818894"}}>
                                    {vehicle.type.type}
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} className={"text-center"}>
                        <VehicleStatus status={vehicle.status.status}/>
                    </Col>
                    <Col xs={2} className={"text-left align-items-center"}>
                        <FeatherIcon icon={"user"} height={15}/>
                        {assignedDrivers[0].driver.name} {assignedDrivers[0].driver.surname}
                    </Col>
                    <Col xs={4} className={"text-center"}>
                        <div className="d-flex flex-row align-items-center">
                            <div className={"text-center"}>
                                <FeatherIcon icon={"calendar"} height={15}/>
                                <Moment format="DD-MMM-YYYY" date={assignedDrivers[0].startDate} />
                            </div>
                            <div className={"text-center"}>
                                <span style={{marginLeft: 5, marginRight: 5}}>TO</span>
                            </div>
                            <div className={"text-center"}>
                                <Moment format="DD-MMM-YYYY" date={assignedDrivers[0].endDate} />
                            </div>
                        </div>
                    </Col>
                    <Col xs={1} className={"text-center"}>
                        <FeatherIcon icon={"edit"}/>
                    </Col>
                </Row>
                {
                    assignedDrivers.length !== 1 ?
                        <>
                            <hr style={{marginTop: 0, marginBottom: 0}}/>
                            {assignedDrivers.map((list) => (
                                <Row className="align-items-center" style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2}}>
                                    <Col xs={3}></Col>
                                    <Col xs={2} className={"text-center"}></Col>
                                    <Col xs={2} className={"text-left align-items-center"} style={{padding: 5}}>
                                        <FeatherIcon icon={"user"} height={15}/>
                                        {list.driver.name} {list.driver.surname}
                                        <hr style={{marginTop: 5, marginBottom: 0}}/>
                                    </Col>
                                    <Col xs={4} className={"text-center"} style={{padding: 5}}>
                                        <div className="d-flex flex-row align-items-center">
                                            <div className={"text-center"}>
                                                <FeatherIcon icon={"calendar"} height={15}/>
                                                <Moment format="DD-MMM-YYYY" date={list.startDate} />
                                            </div>
                                            <div className={"text-center"}>
                                                <span style={{marginLeft: 5, marginRight: 5}}>TO</span>
                                            </div>
                                            <div className={"text-center"}>
                                                <Moment format="DD-MMM-YYYY" date={list.endDate} />
                                            </div>
                                        </div>
                                        <hr style={{marginTop: 5, marginBottom: 0}}/>
                                    </Col>
                                    <Col xs={1} className={"text-center"}></Col>
                                </Row>
                            ))}
                        </>
                        : <></>
                }

            </CardContent>
        </Card>
    )
};

export default AssignVehicle;
