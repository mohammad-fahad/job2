import React, {useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import {SocketIO} from "../socketio/SocketIO";
import Marker from './marker/Marker';

const VehiclesOverview = () => {

    const [locations, setLocations] = useState([{"_id":"605b414047467454a8a8ceea","vehicle_name":"PN 8719","temperature":20,"speed":40,"status":"available","lat": 23.773309,"lng": 90.351649}]);
    const [center, setCenter] = useState({lat: 23.771871, lng: 90.351649});
    useEffect(() => {
        const socket = SocketIO.Socket();
        socket.on('vehicles_location', (data) => {
            console.log(data);
            setLocations(data.result);
        });
        return () => {
            socket.removeAllListeners('vehicles_location');
        }
    },[]);

    const _onChildClick = (key, childProps) => {
        console.log("Change location", childProps);
        setCenter({lat: childProps.lat, lng: childProps.lng});
    };
    const _onBoundsChange = (center, zoom) => {
        setCenter(center);
    };

    const mapOptions = (maps) => {
        return {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: true,
            disableDefaultUI: false,
            streetViewControl: false,
            // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }],
            // styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        }
    };

    return (
        <div>

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBubTNGmaOFYUwyi58nPve4GOvlKJ_OREo" }}
                    center={center}
                    defaultZoom={17}
                    layerTypes={['TrafficLayer', 'TransitLayer']}
                    options={mapOptions}
                    onBoundsChange={_onBoundsChange}
                    onChildClick={_onChildClick}
                >
                    {locations.map((location) => (
                        <Marker
                            lat={location.lat}
                            lng={location.lng}
                            key={location._id}
                            location={location}
                        />
                    ))}
                </GoogleMapReact>
            </div>

        </div>
    );
}

export default VehiclesOverview;
