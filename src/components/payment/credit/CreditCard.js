import { MDBBox } from "mdbreact";
import React from "react";
import styles from "./CreditCard.module.css";

function CreditCard(props) {
  return (
    <React.Fragment>
      <MDBBox className={styles.total}>
        <MDBBox className={styles.lefttotal}>
          <MDBBox className={styles.cardmark}>
            <img src={props.png_url} alt={props.alt} />
          </MDBBox>
          <MDBBox>
            <MDBBox tag="p" className={styles.subcom1}>
              Credit card
            </MDBBox>
            <MDBBox tag="p" className={styles.subcom2}>
              {props.cardnumber}
            </MDBBox>
          </MDBBox>
        </MDBBox>
        <MDBBox className={styles.rightbox}>
          <input value={props.inputvalue} />
        </MDBBox>
      </MDBBox>
    </React.Fragment>
  );
}

export default CreditCard;
