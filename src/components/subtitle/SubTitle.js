import { MDBTypography } from "mdbreact";
import React from "react";
import styles from "./SubTitle.module.css";

function SubTitle(props) {
  return (
    <MDBTypography tag="h3" variant="h3-responsive" className={styles.theme1}>
      {props.subtitle}
    </MDBTypography>
  );
}

export default SubTitle;
