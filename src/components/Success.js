import React, { Component, Fragment } from "react";
import smil_img from "../images/smiling-woman-pink-shirt-sitting-relaxed-sofa-home-table-working-online-laptop-from-home.jpg";
import Button from "@mui/material/Button";
import { FormatQuote } from "@mui/icons-material";

class Success extends Component {
  render() {
    return (
      <Fragment>
        <div className="success">
          <div className="y-beam"></div>
          <img src={smil_img} alt="Simling Lady" className="smilimg" />
          <div className="y-beam-info">
            <h2>
              We belive design should have a positive impact on people's lives
              and the environment
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
          <div className="quote">
            <FormatQuote
              style={{
                fontSize: "110px",
                transform: "rotate(180deg)",
                marginBottom: "-30px",
              }}
            />
            <p className="quotation">
              Success is not final; failure is not fatal: it is the courage to
              continue that counts
            </p>
            <p className="author">- Winston Churchill</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Success;
