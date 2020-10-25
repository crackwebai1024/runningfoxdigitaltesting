import { MDBBox } from "mdbreact";
import React from "react";
import Rate from "../rate/Rate";
import styles from "./Payment.module.css";

function Total(props) {
  return (
    <React.Fragment>
      <MDBBox className={styles.total}>
        <MDBBox className={styles.lefttotal}>
          <MDBBox className={styles.ship}></MDBBox>
          <MDBBox>
            <MDBBox tag="h5" className={styles.subcom1}>
              Small Business
            </MDBBox>
            <MDBBox tag="p" className={styles.subcom2}>
              CHANGE PLAN
            </MDBBox>
          </MDBBox>
        </MDBBox>
        <Rate amount="8,350" />
      </MDBBox>
    </React.Fragment>
  );
}

export default Total;
