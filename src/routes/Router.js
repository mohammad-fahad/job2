import { lazy } from "react";
import {f} from "react-select/dist/index-4bd03571.esm";

const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
const Vehicle = lazy(() => import("../views/vehicles/VehicleView"));
const VehicleDetails = lazy(() => import("../views/vehicles/VehicleDetailsView"));
const AssignVehicles = lazy(() => import("../views/vehicles-assignment/AssignVehiclesView"));
const VehiclesOverview = lazy(() => import("../views/overview/VehiclesOverviewView"));
const RealTimeData = lazy(() => import("../views/overview/RealTimeDataView"));



var ThemeRoutes = [
  {
    collapse: true,
    path: "/overview",
    name: "Dashboard",
    state: "overviewpages",
    icon: "book-open",
    extra: "",
    isMenuItem: true,
    child: [
      {
        path: "/overview/vehicles-overview",
        name: "Vehicles overview",
        icon: "mdi mdi-adjust",
        component: VehiclesOverview,
      },
      {
        path: "/overview/real-time-data",
        name: "Real Time Data",
        icon: "mdi mdi-adjust",
        component: RealTimeData,
      }
    ],
  },
  {
    collapse: true,
    path: "/vehicles",
    name: "Vehicles",
    state: "vehiclespages",
    icon: "car",
    extra: "",
    isMenuItem: true,
    child: [
      {
        path: "/vehicles/vehicles-list",
        name: "Fleet",
        icon: "mdi mdi-adjust",
        component: Vehicle,
      },
      {
        path: "/vehicles/vehicles-assignment",
        name: "Vehicles assignment",
        icon: "mdi mdi-adjust",
        component: AssignVehicles,
      },
    ],
  },
  {
    path: "/vehicles/vehicle-details/:id",
    name: "VehicleDetails",
    icon: "",
    component: VehicleDetails,
    isMenuItem: false
  },
  { path: "/", pathTo: "/overview/vehicles-overview", name: "Dashboard", redirect: true },
];
export default ThemeRoutes;
