import React, { Fragment, Component } from "react";
import la_build from "../images/low-angle-shot-corner-high-business-building.jpg";
import y_girl from "../images/young-girl-talking-phone-while-working-ion-pc-high-quality-photo.jpg";
import crp_arc_opn from "../images/crop-architect-opening-blueprint.jpg";
import Button from "@mui/material/Button";
import ArchitectureIcon from "@mui/icons-material/Architecture";
class Embedded extends Component {
  constructor() {
    super();

    this.state = {
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      styles: {
        backgroundColor: "rgb(255, 208, 0)",
        borderRadius: "50%",
        fontSize: "70px",
      },
    };
  }
  render() {
    return (
      <Fragment>
        <div className="embedded">
          <div className="em-top"></div>
          <div className="em-bottom"></div>
          <img src={la_build} alt="low angle building" className="labuild" />
          <img src={y_girl} alt="young girl" className="ygirl" />
          <img
            src={crp_arc_opn}
            alt="crop architecture opening"
            className="crparcopn"
          />
          <div className="emarch">
            <ArchitectureIcon style={this.state.styles} />
            <h2>We Create embedded architecture</h2>
            <p>
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex.Suspendisse rhoncus laoreet purus
              quis elementum. Phasellus sed efficitur dolor, et ultricies sapien
            </p>
            <p>
              images from <a href="#">Freepik</a>
            </p>
            <Button
              variant="contained"
              style={{
                borderRadius: "100px",
                width: "120px",
                backgroundColor: "rgb(3, 7, 64)",
                textTransform: "lowercase",
                fontWeight: "bold",
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
export default Embedded;
