import {Card, CardContent} from "@material-ui/core";
import React, {useEffect} from "react";
import * as eva from "eva-icons";

const VehicleStatus = ({status}) => {
    useEffect(() => {
        eva.replace();
    }, []);
    return (
        <Card variant="outlined" style={{width: 110}}>
            <CardContent style={{padding: 5}}>
                {
                    status === "available" ?
                    <>
                        <i data-eva={"checkmark-circle-2"} data-eva-height={"20px"} data-eva-fill={"#189BE3"} style={{marginTop: -3, marginRight: 5}}></i>
                        <span style={{fontSize: 12, color: "#189BE3", fontWeight: "bold"}}>
                            Available
                        </span>
                    </>
                    : null
                }

                {
                    status === "out of service" ?
                        <>
                            <i data-eva={"slash"} data-eva-height={"20px"} data-eva-fill={"#F06D5E"} style={{marginTop: -3, marginRight: 5}}></i>
                            <span style={{fontSize: 10, color: "#F06D5E", fontWeight: "bold"}}>
                            Out of Service
                        </span>
                        </>
                        : null
                }

                {
                    status === "on route" ?
                        <>
                            <i data-eva={"navigation-2"} data-eva-height={"20px"} data-eva-fill={"#0D8A72"} style={{marginTop: -3, marginRight: 5}}></i>
                            <span style={{fontSize: 12, color: "#0D8A72", fontWeight: "bold"}}>
                            On Route
                        </span>
                        </>
                        : null
                }

            </CardContent>
        </Card>
    )
};

export default VehicleStatus;
