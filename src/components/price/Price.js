import {
  MDBBox,
  MDBCard,
  MDBCol,
  MDBIcon,
  MDBProgress,
  MDBRow,
} from "mdbreact";
import React, { useState } from "react";
import Rate from "../rate/Rate";
import SubTitle from "../subtitle/SubTitle";
import styles from "./Price.module.css";

function Price(props) {
  const [select, setSelect] = useState("");
  return (
    <MDBCard className={styles.container}>
      <SubTitle subtitle="Setup your pricing" />
      <MDBBox tag="p" className={styles.comment}>
        Please setup your hourly or fixed rate so that the client is aware of
        your pricing
      </MDBBox>
      <MDBRow>
        <MDBCol sm="6">
          <MDBBox
            className={select === 1 ? styles.selectrate : styles.unselectrate}
            onClick={() => setSelect(1)}
          >
            <img
              src="assets/icons8-clock-100.png"
              alt="clock"
              className={styles.rateicon}
            />
            Hourly
          </MDBBox>
        </MDBCol>
        <MDBCol sm="6">
          <MDBBox
            className={select === 2 ? styles.selectrate : styles.unselectrate}
            onClick={() => setSelect(2)}
          >
            <MDBIcon
              far
              icon="file-alt"
              className={styles.rateicon}
              size="2x"
            />
            Fixed
          </MDBBox>
        </MDBCol>
      </MDBRow>
      <MDBBox style={{ height: "40px" }}></MDBBox>
      <Rate amount="180" />
      <MDBProgress className="my-2" material value={50} striped height="5px" />
      <MDBBox
        style={{ marginLeft: "50%" }}
        className={styles.procircle}
      ></MDBBox>
      <MDBBox className={styles.barlabel}>
        <MDBBox tag="p">
          <MDBIcon icon="dollar-sign" className={styles.icon} />
          20
        </MDBBox>
        <MDBBox tag="p">
          <MDBIcon icon="dollar-sign" className={styles.icon} />
          300
        </MDBBox>
      </MDBBox>
    </MDBCard>
  );
}

export default Price;
