import React, { Fragment } from "react";
import styled from "styled-components";
import TitleBar from "../TitleBar";
import CircularMenu from "../CircularMenu";
import backgroundImage from "../../assets/media/bg.jpg";
const Navbar = props => (
  <Fragment>
    <TitleBar>{props.title}</TitleBar>
    <CircularMenu items={props.menuItems} background={backgroundImage} />
  </Fragment>
);

export default Navbar;
