import React, { Fragment } from "react";
import {
  faChalkboardTeacher,
  faChartBar,
  faFileInvoiceDollar,
  faFileSignature,
  faHotel
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import GlobalStyle from "./styles/global.js";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar
      title="lucy"
      menuItems={[
        {
          text: "Provas",
          target: "",
          icon: faChalkboardTeacher,
          active: true
        },
        {
          text: "Empresa",
          target: "",
          icon: faHotel
        },
        {
          text: "Candidatos",
          target: "",
          icon: faFileSignature
        },
        {
          text: "Estatísticas",
          target: "",
          icon: faChartBar
        },
        {
          text: "Planos",
          target: "",
          icon: faFileInvoiceDollar
        }
      ]}
    >
      0
    </Navbar>
    <Title>MINHAS PROVAS</Title>
    <CardList />
  </Fragment>
);

export default App;
