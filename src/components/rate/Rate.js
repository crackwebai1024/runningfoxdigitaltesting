import { MDBBox, MDBIcon } from "mdbreact";
import React from "react";
import styles from "./Rate.module.css";

function Rate(props) {
  return (
    <MDBBox className={styles.amount}>
      <MDBIcon icon="dollar-sign" className={styles.icon} />
      <MDBBox tag="p" className={styles.count}>
        {props.amount}
      </MDBBox>
      <MDBBox tag="p" className={styles.year}>
        / year
      </MDBBox>
    </MDBBox>
  );
}

export default Rate;
