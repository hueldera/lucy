import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "../Header";
import CircularMenu from "../CircularMenu";
import backgroundImage from "../../assets/media/bg.jpg";
const Navbar = props => (
  <Fragment>
    <Header>{props.title}</Header>
    <CircularMenu items={props.menuItems} background={backgroundImage} />
  </Fragment>
);

export default Navbar;
