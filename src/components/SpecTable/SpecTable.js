import React from "react";
import Button from "../Button";
import { Row } from "../Grid";

const Spec = props => (
  <div>
    <Button id="backBtn1" onClick={props.homeButton}>
      <i className="fa fa-caret-left backBtn" /> Back
    </Button>
    <Row>
      <div>
        <Button id="specTab" onClick={props.techButton}>
          Measurements
        </Button>
        <Button id="measTab" onClick={props.specButton}>
          Device Specifications
        </Button>
      </div>
    </Row>
    <table>
      <thead>
        <tr>
          <th>Thread Types</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr className="specs">
          <td>Thread Specifications</td>
          <td>API, API Buttress, Semi-Premium, & Premium</td>
        </tr>
        <tr className="specs">
          <td>Thread Height</td>
          <td>0.200 in (~5mm) Maximum</td>
        </tr>
        <tr className="specs">
          <td>Scanning Time</td>
          <td>
            30 Seconds (Included: mount, part scan, data processing, disconnect)
          </td>
        </tr>
        <tr className="specs">
          <td>Scan Length</td>
          <td>4 in (~100 mm)</td>
        </tr>
        <tr className="specs">
          <td>Data Management</td>
          <td>Automated processing through proprietary system software</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Spec;
