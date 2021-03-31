import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const VehicleFilter = () => {
    const animatedComponents = makeAnimated();
    const [vehicleList, setVehicleList] = useState([]);
    const [vehicleTypeList, setVehicleTypeList] = useState([]);
    const [vehicleStatusList, setVehicleStatusList] = useState([]);

    useEffect(() => {
        let vehicle_name = [];
        vehicle_name.push({ value: "all", label: "All Vehicles" });
        vehicle_name.push({ value: "1", label: "CN 1234" });
        vehicle_name.push({ value: "2", label: "PD 4535" });
        vehicle_name.push({ value: "3", label: "CD 4567" });
        setVehicleList(vehicle_name);

        let vehicle_type = [];
        vehicle_type.push({ value: "all", label: "All Types" });
        vehicle_type.push({ value: "1", label: "Van" });
        vehicle_type.push({ value: "2", label: "Truck" });
        vehicle_type.push({ value: "3", label: "Car" });
        setVehicleTypeList(vehicle_type)

        let vehicle_status = [];
        vehicle_status.push({ value: "all", label: "All Status" });
        vehicle_status.push({ value: "1", label: "Van" });
        vehicle_status.push({ value: "2", label: "Available" });
        vehicle_status.push({ value: "3", label: "Out of Service" });
        setVehicleStatusList(vehicle_status)

    }, []);


    return (
        <div className="d-flex flex-row align-items-center">

            <div className="p-2 w-25">
                <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={vehicleList}
                    placeholder={"All Vehicles"}
                    // onChange={vehicleList}
                />
            </div>
            <div className="p-2 w-25">
                <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={vehicleTypeList}
                    placeholder={"All Types"}
                    // onChange={vehicleList}
                />
            </div>
            <div className="p-2 w-25">
                <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={vehicleStatusList}
                    placeholder={"All Status"}
                    // onChange={vehicleList}
                />
            </div>
            <div className="ml-auto p-2">
                <span
                    className="btn text-white" style={{backgroundColor: "#0D8A72" }}
                >
                  + New Vehicle
                </span>
            </div>

        </div>
    )
};

export default VehicleFilter;
