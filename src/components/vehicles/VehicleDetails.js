import Select from "react-select";
import React, {useEffect, useState} from "react";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Card from "@material-ui/core/Card";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchVehiclesDetails,
    updateVehicleDetailsFromSocket,
} from "../../redux/vehicles/Action";
import VehicleStatus from "./vehicle_status/VehicleStatus";
import {CardContent} from "@material-ui/core";
import {PM} from 'react-environment-chart';
import {Temperature} from 'react-environment-chart';
import {makeStyles} from '@material-ui/core/styles';
import {Progress} from "semantic-ui-react";
import "./vehicle_style.scss";
import GoogleMapReact from 'google-map-react';
import {SocketIO} from "../socketio/SocketIO";

const useStyles = makeStyles({
    indicators_image: {
        width: "20px",
    }
});

const VehicleDetails = (props) => {
    const vehicle_id = props.match.params.id;
    const classes = useStyles();

    const getVisibleVehicle = (vehicle) => {
        if(vehicle === undefined){
            return [];
        }else{
            return vehicle;
        }
    };

    const vehicle = getVisibleVehicle(
        useSelector((state) => state.vehicleReducer.vehicle_details)
    );

    const [lat, setLat] = useState(23.773309);
    const [lng, setLng] = useState(90.351649);
    const [center, setCenter] = useState({lat: 23.773309, lng: 90.351649});

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVehiclesDetails(vehicle_id));
    }, [dispatch]);

    useEffect(() => {
        const socket = SocketIO.Socket();
        socket.on('update_vehicle', (data) => {
            if(vehicle_id === data.result._id){
                dispatch(updateVehicleDetailsFromSocket(data));
            }
        });
        socket.on('vehicle_current_location', (data) => {
            if(vehicle_id === data.result._id){
                setLat(data.result.lat);
                setLng(data.result.lng);
                setCenter({lat: data.result.lat, lng: data.result.lng})
            }
        });
        return () => {
            socket.removeAllListeners('update_vehicle');
            socket.removeAllListeners('vehicle_current_location');
        }
    },[]);


    const LocationPin = ({ text }) => (
        <div className="pin">
            <img src={"/images/car-driving-marker.png"} width={"35px"}/>
        </div>
    );
    const handleApiLoaded = (map, maps) => {
        console.log(map)
    };

    return (
        <div>
            <div className="d-flex flex-row align-items-center" style={{backgroundColor: "#ffffff" }}>
                <div className="p-2 mr-auto">
                      <a href={"/vehicles/vehicles-list"}>
                          Bank Vehicle List
                      </a>
                </div>

                <div className="p-2">
                    <span
                        className="btn text-white" style={{backgroundColor: "#0D8A72" }}
                    >
                      + Edit Vehicle
                    </span>
                </div>
                <div className="p-2">
                    <span
                        className="btn text-white" style={{backgroundColor: "#EF6454" }}
                    >
                      Delete Vehicle
                    </span>
                </div>
            </div>

            <Row style={{marginTop: 20}}>
                <Col xs={5}>
                    <Card variant="outlined">
                        <Row className="align-items-center" style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2}}>
                            <Col>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="p-2">
                                        <img src="/images/truck-available.png" width={"62px"}/>
                                    </div>
                                    <div className="p-2">
                                        <div style={{fontSize: 18, fontWeight: "bold", color: "#3E5569"}}>
                                            {vehicle.name}
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <div>
                                                <span style={{fontSize: 12, color: "#818894"}}>Vin: </span>
                                                <span style={{fontSize: 12, color: "#3E5569"}}>{vehicle.vin}</span>
                                            </div>
                                            <div style={{marginLeft: 5}}>
                                                <span style={{fontSize: 12, color: "#818894"}}>Licence Plate: </span>
                                                <span style={{fontSize: 12, color: "#3E5569"}}>{vehicle.licensePlate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{marginTop: 0, marginBottom: 0}}/>
                        <div style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2, paddingRight: 10, paddingLeft: 10}}>
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td><div style={{fontSize: 14, color: "#3E5569"}}>Status: </div></td>
                                    <td><div style={{fontSize: 14, color: "#3E5569"}}>Type: </div></td>
                                    <td rowSpan="2">
                                        <Card variant="outlined">
                                            <CardContent style={{padding: 5}}>
                                                <img src="/images/fuel@3x.svg" width={"18px"}/>
                                                <span style={{marginLeft: 5, fontSize: 14, color: "#818894"}}>Fuel Consumption</span>
                                                <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>25L/100kmh</div>
                                            </CardContent>
                                        </Card>
                                    </td>
                                </tr>
                                <tr>
                                    <td><VehicleStatus status={vehicle.status}/></td>
                                    <td><div style={{fontSize: 14, color: "#818894"}}>{vehicle.type}</div></td>
                                </tr>
                                <tr>
                                    <td><div style={{fontSize: 14, color: "#3E5569"}}>Model: </div></td>
                                    <td><div style={{fontSize: 14, color: "#3E5569"}}>Driver: </div></td>
                                    <td rowSpan="2">
                                        <Card variant="outlined">
                                            <CardContent style={{padding: 5}}>
                                                <img src="/images/speed-1@3x.svg" width={"18px"}/>
                                                <span style={{marginLeft: 5, fontSize: 14, color: "#818894"}}>Average Speed</span>
                                                <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>100 km/h</div>
                                            </CardContent>
                                        </Card>
                                    </td>
                                </tr>
                                <tr>
                                    <td><div style={{fontSize: 14, color: "#818894"}}>{vehicle.model}</div></td>
                                    <td>
                                        <div style={{fontSize: 14, color: "#818894"}}>
                                            {
                                                vehicle.assignedDrivers !== undefined ?
                                                    vehicle.assignedDrivers[0].name +" "+vehicle.assignedDrivers[0].surname
                                                    : null
                                            }
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}>
                            {
                                vehicle.condition !== undefined ?
                                    <>
                                        <span style={{marginLeft: 5, fontSize: 14, color: "#818894"}}>Vehicle condition ({vehicle.condition.overview}%)</span>
                                        <Progress percent={vehicle.condition.overview} indicating style={{height: 25, margin: 0}}/>
                                    </>
                                    : null
                            }
                        </div>
                    </Card>
                </Col>

                <Col xs={3}>
                    <Card variant="outlined" style={{padding: 10, height: "100%"}}>
                        <div className={"text-center align-items-center"}>
                            <div style={{fontSize: 14, fontWeight: "bold", color: "#3E5569"}}>
                                Vehicle Speed ({vehicle.speed} km/h)
                            </div>
                            <div className={"row h-100 justify-content-center align-items-center"}>
                                <PM value={vehicle.speed} height={200}/>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col xs={4}>
                    <Card variant="outlined" style={{height: "100%"}}>
                        <Row>
                            <Col>
                                <div className={"text-center align-items-center"} style={{paddingTop: 5, paddingLeft: 5}}>
                                    <div style={{fontSize: 14, fontWeight: "bold", color: "#3E5569"}}>
                                        Temp ({vehicle.temperature} c)
                                    </div>
                                    <div className={"row h-100 justify-content-center align-items-center"}>
                                        <Temperature value={vehicle.temperature} height={230}/>
                                    </div>
                                </div>
                            </Col>
                            <Col className={"h-100 justify-content-center align-items-center"} style={{marginTop: 20, marginRight: 5}}>
                                <Card variant="outlined">
                                    <CardContent style={{padding: 5}}>
                                        <div className="d-flex flex-row h-100 justify-content-center align-items-center">
                                            <div>
                                                <img className={classes.indicators_image} src="/images/motor@3x-green.svg"/>
                                            </div>
                                            <div className={"text-center"} style={{marginLeft: 10}}>
                                                <span style={{fontSize: 14, color: "#818894"}}>OK</span>
                                                <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>Engine</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card variant="outlined" style={{marginTop: 5}}>
                                    <CardContent style={{padding: 5}}>
                                        <div className="d-flex flex-row h-100 justify-content-center align-items-center">
                                            <div>
                                                <img className={classes.indicators_image} src="/images/battery@3x-green.svg"/>
                                            </div>
                                            <div className={"text-center"} style={{marginLeft: 10}}>
                                                <span style={{fontSize: 14, color: "#818894"}}>OK</span>
                                                <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>Battery</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card variant="outlined" style={{marginTop: 5}}>
                                    <CardContent style={{padding: 5}}>
                                        <div className="d-flex flex-row h-100 justify-content-center align-items-center">
                                            <div>
                                                <img className={classes.indicators_image} src="/images/oil@3x-yellow.svg" />
                                            </div>
                                            <div className={"text-center"} style={{marginLeft: 10}}>
                                                <span style={{marginLeft: 5, fontSize: 14, color: "#818894"}}>35%</span>
                                                <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>Oil</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card variant="outlined" style={{marginTop: 5}}>
                                    <CardContent style={{padding: 5}}>
                                        <div className="d-flex flex-row h-100 justify-content-center align-items-center">
                                            <div>
                                                <img className={classes.indicators_image} src="/images/gas@3x-red.svg" />
                                            </div>
                                            <div className={"text-center"} style={{marginLeft: 10}}>
                                                <span style={{marginLeft: 5, fontSize: 14, color: "#818894"}}>1L</span>
                                                <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>Gad</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Col>
                        </Row>
                        {/*<div style={{marginLeft: 10, marginRight: 10, marginBottom: 18}}>*/}

                        {/*</div>*/}
                    </Card>
                </Col>
            </Row>

            <Row style={{marginTop: 10}}>
                <Col xs={5}>
                    <Card variant={"outlined"} style={{height: "100%"}}>
                        <div style={{paddingTop: 10, paddingLeft: 10, fontSize: 18, fontWeight: "bold", color: "#3E5569"}}>
                            Vehicle Details
                        </div>
                        <div style={{marginTop: 10}}>
                            <table className={"vehicle_details_table"} style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td className={"text-right vehicle_details_table_td_right"}>Name</td>
                                    <td className={"text-left"}>{vehicle.name}</td>
                                </tr>
                                <tr>
                                    <td className={"text-right vehicle_details_table_td_right"}>Vin</td>
                                    <td className={"text-left"}>{vehicle.vin}</td>
                                </tr>
                                <tr>
                                    <td className={"text-right vehicle_details_table_td_right"}>Color</td>
                                    <td className={"text-left"}>{vehicle.color}</td>
                                </tr>
                                <tr>
                                    <td className={"text-right vehicle_details_table_td_right"}>Model</td>
                                    <td className={"text-left"}>{vehicle.model}</td>
                                </tr>
                                <tr>
                                    <td className={"text-right vehicle_details_table_td_right"}>Year</td>
                                    <td className={"text-left"}>{vehicle.year}</td>
                                </tr>
                                <tr>
                                    <td className={"text-right vehicle_details_table_td_right"}>Odometer</td>
                                    <td className={"text-left"}>{vehicle.odometer}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card variant={"outlined"} style={{height: "100%"}}>
                        <div style={{paddingTop: 10, paddingLeft: 10, fontSize: 18, fontWeight: "bold", color: "#3E5569"}}>
                            Maintenance
                        </div>
                        <div style={{marginTop: 10}}>
                            <table className={"vehicle_details_table"} style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td className={"text-right"}><img src={"/images/brake@3x-red.svg"} width={"30px"} /></td>
                                    <td>
                                        <div style={{color: "#3E5569", fontSize: 14}}>Brakes Repair</div>
                                        <div style={{color: "#878E99", fontSize: 12}}>2 month overdue</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"text-right"}><img src={"/images/filter@3x-red.svg"} width={"30px"} /></td>
                                    <td>
                                        <div style={{color: "#3E5569", fontSize: 14}}>Filter Replacement</div>
                                        <div style={{color: "#878E99", fontSize: 12}}>1 month overdue</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"text-right"}><img src={"/images/lift@3x-red.svg"} width={"30px"} /></td>
                                    <td>
                                        <div style={{color: "#3E5569", fontSize: 14}}>Planned Inspection</div>
                                        <div style={{color: "#878E99", fontSize: 12}}>4 month overdue</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"text-right"}><img src={"/images/tire@3x-red.svg"} width={"30px"} /></td>
                                    <td>
                                        <div style={{color: "#3E5569", fontSize: 14}}>Rotate Tires</div>
                                        <div style={{color: "#878E99", fontSize: 12}}>3 month overdue</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card variant={"outlined"} style={{height: "100%"}}>
                        <div style={{paddingTop: 10, paddingLeft: 10, fontSize: 18, fontWeight: "bold", color: "#3E5569"}}>
                            Live Location
                        </div>
                        <hr style={{marginTop: 10, marginBottom: 0}}/>
                        <div>
                            <div style={{ height: '40vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyBubTNGmaOFYUwyi58nPve4GOvlKJ_OREo" }}
                                    defaultCenter={center}
                                    defaultZoom={17}
                                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                                >
                                    <LocationPin
                                        lat={lat}
                                        lng={lng}
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

        </div>
    )
};

export default VehicleDetails;
