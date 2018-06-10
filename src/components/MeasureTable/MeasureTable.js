import React from "react";
import {Row} from "../Grid";
import Button from "../Button";

const Measure = props => (
  <div>
    <Button id="backBtn1" onClick={props.homeButton}><i className="fa fa-caret-left backBtn"></i> Back</Button>
    <Row>
      <div className="specTab">
      <Button id="specTab1" onClick={props.techButton}>Measurements</Button>
      <Button id="measTab1" onClick={props.specButton}>Device Specifications</Button>
      </div>
    </Row>
    <table>
      <thead>
        <tr>
          <th>System Specifications</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr className="specs">
          <td>Export Formats</td>
          <td>.dxf, .csv</td>
        </tr>
        <tr className="specs">
          <td>System Components</td>
          <td>Scanning profiler, USB/power cable, Power adapter, clamp</td>
        </tr>
        <tr className="specs">
          <td>Power Requirements</td>
          <td>100-240 VAC 50/60 Hz</td>
        </tr>
        <tr className="specs">
          <td>Computer Requirements</td>
          <td>Win7 or higher (Win10 Recommended)</td>
        </tr>
        <tr className="specs">
          <td>Data Transmission</td>
          <td>6' USB Cable</td>
        </tr>
        <tr className="specs">
          <td>System Weight</td>
          <td>Scanning profiler 6 lbs (2.7 kg)</td>
        </tr>
        <tr className="specs">
          <td>Scanner Dimensions</td>
          <td>L 12" x W 4" x H 6" (30 cm x 10 cm x 15 cm)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Measure;