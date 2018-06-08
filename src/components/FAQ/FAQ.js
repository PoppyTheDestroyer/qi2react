import React from "react";

const FAQ = props => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Frequently Asked Questions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>What is the primary purpose of this tool?</td>
        </tr>
        <tr>
          <td>
            This tool is primarily designed to replace the time-consuming
            process of mold analysis of thread features through use of an
            optical comparitor and an overlay.
          </td>
        </tr>
        <tr>
          <td>How long does the inspection process take?</td>
        </tr>
        <tr>
          <td>Less than one minute</td>
        </tr>
        <tr>
          <td>Is there a PASS/FAIL evaluation?</td>
        </tr>
        <tr>
          <td>
            PASS/FAIL criteria are determined from shop to shop depending on
            internal quality standards.
          </td>
        </tr>
        <tr>
          <td>Can I drop the tool?</td>
        </tr>
        <tr>
          <td>
            This is a precision measuring instrument that can potentially be
            damaged by excessive shocks.Handle with care.
          </td>
        </tr>
        <tr>
          <td>
            Normally, a whole suite of gages is required for a certain
            connection type/family. Will I need to buy a different tool for each
            connection type/family?
          </td>
        </tr>
        <tr>
          <td>
            No, the QC-X is adaptable to a wide variety of API, semi-premium and
            premium threadforms, and custom processing algorithms for
            proprietary threads can be developed.
          </td>
        </tr>
        <tr>
          <td>Can I store and retreive data collected by the QC-X?</td>
        </tr>
        <tr>
          <td>
            Yes, all data can be stored indefinitely. No need for storing bulky
            and hard to manage molds.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default FAQ;