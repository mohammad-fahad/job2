import React from "react";

function Specification({ img, number, vehicle, title, readings }) {
  return (
    <div>
      <div className="row ">
        <div className="col-md-2">
          <img
            src={img}
            height="40vh"
            width="30vw"
            alt="image"
            className="mr-2"
          />
        </div>
        <div className="col-md-10">
          <h2 className="text-danger">{number}</h2>
          <p className="text-muted">{vehicle}</p>
        </div>
      </div>
      <h6 className="mt-4">{title}</h6>
      <p className="text-muted">{readings}</p>
    </div>
  );
}

export default Specification;
