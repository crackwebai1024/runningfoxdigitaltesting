import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./App.css";
import Payment from "./components/payment/Payment";
import UserCard from "./components/usercard/UserCard";
import Price from "./components/price/Price";

function App() {
  return (
    <MDBContainer>
      <MDBRow className="bodycont">
        <MDBCol lg="8">
          <Payment />
        </MDBCol>
        <MDBCol lg="4">
          <UserCard />
          <Price />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
