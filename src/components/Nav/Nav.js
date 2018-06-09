import React from "react";
import Button from "../Button";

const Nav = props => (
  <div className="topNav navbar-collapse">
    <Button onClick={props.homeButton}>Home</Button>
    <Button onClick={props.techButton}>Technical Facts</Button>
    <Button onClick={props.faqButton}>FAQ</Button>
    <Button>Photo Gallery</Button>
    <Button>Video Gallery</Button>
  </div>
);

export default Nav;