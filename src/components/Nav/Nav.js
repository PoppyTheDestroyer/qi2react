import React from "react";
import Button from "../Button";

const Nav = props => (
  <div className="topNav">
    <div id="navcontainer">
      <ul>
        <li key={1}>
          {" "}
          <Button onClick={props.homeButton}>Home</Button>
        </li>
        <li key={2}>
          {" "}
          <Button onClick={props.techButton}>Technical Facts</Button>
        </li>
        <li key={3}>
          {" "}
          <Button onClick={props.faqButton}>FAQ</Button>
        </li>
        <li key={4}>
          <Button>Photo Gallery</Button>
        </li>
        <li key={5}>
          {" "}
          <Button>Video Gallery</Button>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
