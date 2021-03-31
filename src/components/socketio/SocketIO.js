import React, {useEffect, useState} from "react";
import { io } from "socket.io-client";

let socket;
const ENDPOINT = '116.68.200.97:56020';

export const SocketIO = {
    Socket,
    GetConnection
};

function Socket() {
    return socket;
}

function GetConnection() {
    const options = {
        rememberUpgrade: true,
        transports: ['websocket'],
        secure: true,
        rejectUnauthorized: false
    };

    socket = io.connect(ENDPOINT, options);

    return socket
}
