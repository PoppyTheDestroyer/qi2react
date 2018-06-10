import React from "react";
import Button from "../Button";

const Nav = props => (
  <div className="topNav navbar-collapse">
    <div id="navcontainer">
      <ul>
        <li>
          {" "}
          <Button onClick={props.homeButton}>Home</Button>
        </li>
        <li>
          {" "}
          <Button onClick={props.techButton}>Technical Facts</Button>
        </li>
        <li>
          {" "}
          <Button onClick={props.faqButton}>FAQ</Button>
        </li>
        <li>
          <Button>Photo Gallery</Button>
        </li>
        <li>
          {" "}
          <Button>Video Gallery</Button>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
