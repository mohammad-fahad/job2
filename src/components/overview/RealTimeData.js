import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Row,

} from 'reactstrap';
import { Pie } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";
import { Button, Image, List } from 'semantic-ui-react'
import Specification from "./marker/Specification";


const data = [
  {
    img:
      "https://cdn1.vectorstock.com/i/1000x1000/74/00/gasoline-filling-station-logo-design-vector-3897400.jpg",
    number: 5,
    vehicle: "vehicle",
    title: "Fuel Consumption",
    readings: "> 30L/100km",
  },
  {
    img: "https://icon-library.com/images/turbo-icon/turbo-icon-10.jpg",
    number: 10,
    vehicle: "vehicle",
    title: "CO2 Emission",
    readings: "> 450g/km",
  },
  {
    img: "https://image.freepik.com/free-icon/speedometer-icon_318-1920.jpg",
    number: 3,
    vehicle: "vehicle",
    title: "Sped",
    readings: "> 130km/h",
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1wF0_588kv-Ssfcw02Nkhm9Amz43jgTlPw&usqp=CAU",
    number: 1,
    vehicle: "vehicle",
    title: "Oil Temperature",
    readings: "> 120c",
  },
];

const RealTimeData = () => {

    //Pie Chart
    var pieData = {
        labels: ["On Route", "Availble", "Out of service"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#2dce89", "#5e72e4", "#23b7e5"],
                hoverBackgroundColor: ["#2dce89", "#5e72e4", "#23b7e5"],
            },
        ],
    };

    var options = {
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '100%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                    }
                },
            }
        },
       
        stroke: {
            lineCap: 'round'
        },
        labels: ['Percent'],
    };

var series = [58];
return (
  <>
    <Card>
      <CardBody>Real Time Data</CardBody>
    </Card>
    <div className="d-flex card-deck mb-5">
      <div className="col-md-3 card ">
        <div className="d-flex">
          <img
            className="w-25 h-75"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="p-2">
            <h2 className="text-center">5</h2>
            <p className="text-center"> Vehicles with Errors</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 card ">
        <div className="d-flex">
          <img
            className="w-25 h-75"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="p-2">
            <h2 className="text-center">5</h2>
            <p className="text-center"> Vehicles with Errors</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 card ">
        <div className="d-flex">
          <img
            className="w-25 h-75"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="p-2">
            <h2 className="text-center">5</h2>
            <p className="text-center"> Vehicles with Errors</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 card ">
        <div className="d-flex">
          <img
            className="w-25 h-75"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="p-2">
            <h2 className="text-center">5</h2>
            <p className="text-center"> Vehicles with Errors</p>
          </div>
        </div>
      </div>
    </div>
    <Row>
      <div className="col-md-3">
        <Card style={{ height: "100%" }}>
          <CardBody>
            <CardTitle>Total Vehicles</CardTitle>
            <div
              className="chart-wrapper"
              style={{ width: "100%", height: 350 }}
            >
              <Pie
                data={pieData}
                options={{
                  maintainAspectRatio: false,
                  legend: {
                    display: false,
                    labels: {
                      fontFamily: "Nunito Sans, sans-sarif",
                      fontColor: "#8898aa",
                    },
                  },
                }}
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-6">
        <Card style={{ height: "100%" }}>
          <CardBody>
            <CardTitle>Vehicles Condition</CardTitle>
            <div
              className="chart-wrapper row m-2 mt-5"
              style={{ width: "100%" }}
            >
              <div
                className=" ml-2"
                style={{
                  width: "31%",
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                }}
              >
                <ReactApexChart
                  options={options}
                  series={series}
                  type="radialBar"
                  height={150}
                  style={{ color: "black" }}
                />
                <hr />
                <h1 className="text-center">52</h1>
                <p className="text-center mb-2">Vehicles</p>
              </div>
              <div
                className=" ml-2"
                style={{
                  width: "31%",
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                }}
              >
                <ReactApexChart
                  options={options}
                  series={series}
                  type="radialBar"
                  height={150}
                />
                <hr />
                <h1 className="text-center">52</h1>
                <p className="text-center mb-2">Vehicles</p>
              </div>
              <div
                className=" ml-2"
                style={{
                  width: "31%",
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                }}
              >
                <ReactApexChart
                  options={options}
                  series={series}
                  type="radialBar"
                  backgroundColor={"black"}
                  height={150}
                />
                <hr />
                <h1 className="text-center">52</h1>
                <p className="text-center mb-2">Vehicles</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="w-25">
        <Card>
          <CardBody style={{overflowY: 'scroll', height:'220px'}}>
            <div className="d-flex justify-content-between">
              <CardTitle>Traffic Jam</CardTitle>
              <img
                style={{ height: "3vh" }}
                src="https://image.flaticon.com/icons/png/128/66/66841.png"
              />
            </div>
            <h3>16</h3>
            <p>Vehicles</p>
            <div
              className="row container"
              style={{ borderBottom: "1px solid red" }}
            >
              <div className="col-md-3">
                <div className="d-flex align-items-center">
                  <img
                    style={{ height: "3vh" }}
                    src="https://image.flaticon.com/icons/png/128/66/66841.png"
                  />
                  <p className="text-danger ml-2">2</p>
                </div>
              </div>
              <div className="col-md-9">
                <h6 className="text-danger">Evacuation Required</h6>
              </div>
            </div>
            <div
              className="row container"
              style={{ borderBottom: "1px solid red" }}
            >
              <div className="col-md-3">
                <div className="d-flex align-items-center">
                  <img
                    style={{ height: "3vh" }}
                    src="https://image.flaticon.com/icons/png/128/66/66841.png"
                  />
                  <p className="text-danger ml-2">2</p>
                </div>
              </div>
              <div className="col-md-9">
                <h6 className="text-danger">Evacuation Required</h6>
              </div>
            </div>
            <div
              className="row container"
              style={{ borderBottom: "1px solid red" }}
            >
              <div className="col-md-3">
                <div className="d-flex align-items-center">
                  <img
                    style={{ height: "3vh" }}
                    src="https://image.flaticon.com/icons/png/128/66/66841.png"
                  />
                  <p className="text-danger ml-2">2</p>
                </div>
              </div>
              <div className="col-md-9">
                <h6 className="text-danger">Evacuation Required</h6>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Total Vehicles</CardTitle>
          </CardBody>
        </Card>
      </div>
    </Row>
    {/* middle part of the page */}
    <Row className="mt-4">
      <div className="col-md-6">
        <Card>
          <div className="m-4">
            <h3>Warnings</h3>
            <p> Driving Policy Violations</p>
            <div className="row">
              <div className="col-md-8">
                <List divided verticalAlign="middle mt-4">
                  <List.Item style={{ padding: "10px" }}>
                    <List.Content floated="right">
                      <p>15 ></p>
                    </List.Content>
                    <Image
                      avatar
                      src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                    />
                    <List.Content>Maintenance</List.Content>
                  </List.Item>
                </List>
              </div>
              <div className="col-md-4"></div>
              <div></div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-md-3">
        <Card>
          <div className="m-3">
            <h3>Trips</h3>
            <p>24 hours Trips Data</p>
            <List divided verticalAlign="middle mt-5">
              <List.Item>
                <List.Content floated="right">
                  <p>156 ></p>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                />
                <List.Content>Maintenance</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <p>156 ></p>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                />
                <List.Content>Maintenance</List.Content>
              </List.Item>
            </List>
          </div>
        </Card>
      </div>
      <div className="col-md-3">
        <Card>
          <div className="m-3">
            <h3>trips Performance</h3>
            <div className="d-flex">
              <h6 className="text-left">
                <strong>158</strong>
              </h6>
              <h6 className="text-right">
                <strong>23</strong> left
              </h6>
            </div>
            <div>
              <p className="text-muted">Planned for today</p>
              <div className="progress " style={{ height: "2vh" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "40%", height: "50px" }}
                ></div>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "10%" }}
                ></div>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "20%" }}
                ></div>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <h5 className="text-success">40% / 158</h5>
                  <p className="text-muted">Live Tips</p>
                  <div className="mt-4">
                    <h5 className="text-danger">10% / 158</h5>
                    <p className="text-muted">Being Late</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="text-success">20% / 158</h5>
                  <p className="text-muted">Completed</p>
                  <div className="mt-4">
                    <h5 className="text-danger">5% / 158</h5>
                    <p className="text-muted">Failed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Row>
    <div className="row">
      <div className="col-md-3">
        <Card>
          <div className="p-3">
            <h3>Out of Service</h3>
            <p>Out of order vehicles</p>

            <h3>25</h3>
            <p>vehicles total</p>
            <List divided verticalAlign="middle">
              <List.Item style={{ padding: "10px" }}>
                <List.Content floated="right">
                  <p>15 ></p>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                />
                <List.Content>Maintenance</List.Content>
              </List.Item>
              <List.Item style={{ padding: "10px" }}>
                <List.Content floated="right">
                  <p>15 ></p>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                />
                <List.Content>Maintenance</List.Content>
              </List.Item>
              <List.Item style={{ padding: "10px" }}>
                <List.Content floated="right">
                  <p>15 ></p>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                />
                <List.Content>Maintenance</List.Content>
              </List.Item>
            </List>
          </div>
        </Card>
      </div>
      <div className="col-md-3">
        <Card>
          <div className="p-3">
            <h2> safe driving meters</h2>
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={250}
            />
          </div>
        </Card>
      </div>
      <div className="col-md-6">
        <div className="row bg-white">
          {data.map((d) => (
            <div className="col-md-6 border p-5">
              <Specification
                key={d.length}
                img={d.img}
                number={d.number}
                vehicle={d.vehicle}
                title={d.title}
                readings={d.readings}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);
}

export default RealTimeData;


