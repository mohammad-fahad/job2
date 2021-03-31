import React, {useEffect} from 'react';
import { Row, Col } from 'reactstrap';
import {
    Card,
    CardContent,
} from '@material-ui/core';
import { Progress, Label, Button, Icon } from 'semantic-ui-react';
import VehicleStatus from "./vehicle_status/VehicleStatus";
import PropTypes from "prop-types";
import * as eva from "eva-icons";

const Vehicle = ({
                     name,
                     vin,
                     type,
                     status,
                     condition,
                     temperature,
                     _id
}) => {
    return (
        <Card variant="outlined" style={{marginTop: 5}} >
                <CardContent style={{padding: 0}}>
                    <Row className="align-items-center" style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2}}>
                        <Col xs={3}>
                            <a href={"/vehicles/vehicle-details/"+_id}>
                                <div className="d-flex flex-row">
                                    <div className="p-2">
                                        <img src="/images/truck-available.png" width={"42px"}/>
                                    </div>
                                    <div className="p-2 align-items-center">
                                        <div style={{fontSize: 18, fontWeight: "bold", color: "#3E5569"}}>
                                            {name}
                                        </div>
                                        <span style={{fontSize: 12, color: "#818894"}}>
                                        {vin}
                                    </span>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col xs={1} className={"text-center"}>
                            <span style={{fontSize: 12, color: "#818894", fontWeight: "bold"}}>
                                {type}
                            </span>
                        </Col>
                        <Col xs={2} className={"text-center"}>
                            <VehicleStatus status={status}/>
                        </Col>
                        <Col xs={2} className={"text-center"}>
                            <div>
                                <Progress percent={condition.overview} indicating style={{height: 25, margin: 0}}/>
                            </div>
                        </Col>
                        <Col xs={2} className={"text-center"}>
                            <Label>
                                <i data-eva={"thermometer"} data-eva-height={"14px"} data-eva-fill={"#68B6CA"}></i> {temperature}
                            </Label>
                        </Col>
                        <Col xs={2} className={"text-center"}>
                            <Button color='twitter' style={{fontSize: 10}}>
                                <Icon name='map marker alternate' /> LIVE VIEW
                            </Button>
                        </Col>
                    </Row>
                </CardContent>

        </Card>
    );
};

Vehicle.propTypes = {
    name: PropTypes.string.isRequired
};

export default Vehicle;
