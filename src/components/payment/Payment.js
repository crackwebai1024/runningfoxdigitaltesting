import {
  MDBBox,
  MDBBtn,
  MDBCard,
  MDBIcon,
  MDBInput,
  MDBTypography,
} from "mdbreact";
import React from "react";
import SubTitle from "../subtitle/SubTitle";
import CreditCard from "./credit/CreditCard";
import styles from "./Payment.module.css";
import Total from "./Total";

function Payment(props) {
  let cardcontent = [
    {
      png_url: "assets/mastercard.png",
      alt: "mastercard",
      cardnumber: "2344 xxxx xxxx 8880",
      inputvalue: "cvc",
    },
    {
      png_url: "assets/visacard.png",
      alt: "visacard",
      cardnumber: "8890 xxxx xxxx 1234",
      inputvalue: "88",
    },
  ];
  return (
    <React.Fragment>
      <MDBCard className={styles.wrapper}>
        <MDBTypography tag="h2" variant="h2-responsive">
          Upgrade your plan
        </MDBTypography>
        <MDBBox tag="p" className={styles.comment}>
          Please make the payment to start enjoying all the features of our
          premium plan as soon as possible
        </MDBBox>
        <Total />
        <SubTitle subtitle="Payment details" />
        {cardcontent.map((item, key) => (
          <CreditCard
            png_url={item.png_url}
            cardnumber={item.cardnumber}
            inputvalue={item.inputvalue}
            alt={item.alt}
          />
        ))}
        <MDBTypography tag="p" className={styles.theme3}>
          ADD PAYMENT METHOD
        </MDBTypography>
        <MDBInput outline label="email address" className={styles.emailinput} />
        <MDBBtn color="primary" fluid className={styles.btn}>
          proceed to payment
          <MDBIcon icon="arrow-right" />
        </MDBBtn>
      </MDBCard>
    </React.Fragment>
  );
}

export default Payment;
