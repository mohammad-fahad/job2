import React from 'react';
import './marker.scss';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
    typography: {
        padding: theme.spacing(2),
    }
}));

const Marker = (props: any) => {
    const { location } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };


    return (
        <div>
            <Popper
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
                style={{marginBottom: 5}}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Row className="align-items-center" style={{marginTop: 5, marginBottom: 5, marginLeft: 2, marginRight: 2}}>
                                <Col>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="p-2">
                                            <img src="/images/truck-available.png" width={"32px"}/>
                                        </div>
                                        <div className="p-2">
                                            <div style={{fontSize: 18, fontWeight: "bold", color: "#3E5569"}}>
                                                {location.vehicle_name}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <hr style={{marginTop: 0, marginBottom: 0}}/>
                            <Row className="align-items-center" style={{marginBottom: 5, marginLeft: 2, marginRight: 2}}>
                                <Col>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="p-2">
                                            <Card variant="outlined">
                                                <CardContent style={{padding: 5}}>
                                                    <FeatherIcon icon={"thermometer"} width={"18px"} style={{color: "#1A8972"}}/>
                                                    <span style={{marginLeft: 5, fontSize: 14, color: "#818894"}}>Temperature</span>
                                                    <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>{location.temperature}</div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div className="p-2">
                                            <Card variant="outlined">
                                                <CardContent style={{padding: 5}}>
                                                    <FeatherIcon icon={"clock"} width={"18px"} style={{color: "#1A8972"}}/>
                                                    <span style={{marginLeft: 5, fontSize: 14, color: "#818894"}}>Speed</span>
                                                    <div className={"text-center"} style={{fontSize: 12, color: "#3E5569"}}>{location.speed}</div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <div onClick={handleClick('top')} className="pin bounce"
                 style={{ cursor: 'pointer', width: 35, height: 35}}
                 title={location.vehicle_name}
            >
                <div className="pulse">
                    {
                        location.status === "available" ?
                            <img src={"/images/car-driving-marker.png"} width={"35px"}/>
                            : <img src={"/images/car-parked-marker.png"} width={"35px"}/>
                    }
                </div>
            </div>
        </div>

    );
};

export default Marker;
