import React, { Component, Fragment } from "react";
import la_build1 from "../images/low-angle-shot-corner-high-business-building.jpg";
import crp_arc_opn1 from "../images/crop-architect-opening-blueprint.jpg";
import conference from "../images/executives-joking-laughing-office.jpg";
import Button from "@mui/material/Button";

class Serivce extends Component {
  render() {
    return (
      <Fragment>
        <div className="service">
          <div className="ser-left"></div>
          <div className="ser-right"></div>
          <img
            src={crp_arc_opn1}
            alt="crop architecture opening"
            className="crparcopn1"
          />
          <img src={conference} alt="Conference" className="conference" />
          <img src={la_build1} alt="low angle building" className="labuild1" />
          <div className="wwd">
            <h3>WHAT WE DO</h3>
            <h2>
              Full service architecture design studio with offices in Brooklyn,
              New York and Richmond
            </h2>
            <p>
              Images from <a href="#">Freepik</a>
            </p>
            <Button
              variant="contained"
              style={{
                borderRadius: "100px",
                width: "112px",
                backgroundColor: "rgb(2, 23, 72)",
                textTransform: "lowercase",
                fontWeight: "bold",
                color: "#fff",
                marginTop: "15px",
              }}
            >
              learn more
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Serivce;
