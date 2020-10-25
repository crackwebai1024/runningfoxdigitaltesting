import {
  MDBBox,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBTypography,
} from "mdbreact";
import React from "react";
import styles from "./UserCard.module.css";

function UserCard(props) {
  let footercontent = [
    { topic: "Followers", cont: "980" },
    { topic: "Projects", cont: "142" },
    { topic: "Rank", cont: "129" },
  ];
  return (
    <MDBCard className={styles.container}>
      <MDBCardImage
        className={`img-fluid ${styles.cardimage}`}
        src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
        waves
      />
      <MDBBox className={styles.avatar}>
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
          alt=""
          className="rounded-circle img-fluid"
        />
      </MDBBox>
      <MDBCardBody className={styles.cardbody}>
        <MDBCardTitle>Flip Martin Jose</MDBCardTitle>
        <MDBCardText>Los Angeles</MDBCardText>
        <MDBBox className={styles.prolevel}>Pro Level</MDBBox>
        <MDBBox className={styles.bodyfooter}>
          {footercontent.map((item, key) => (
            <MDBBox style={{ marginTop: "30px" }}>
              <MDBTypography
                tag="p"
                style={{ color: "#aaa", marginBottom: "0px" }}
              >
                {item.topic}
              </MDBTypography>
              <MDBTypography tag="h2" style={{ color: "#666" }}>
                {item.cont}
              </MDBTypography>
            </MDBBox>
          ))}
        </MDBBox>
      </MDBCardBody>
    </MDBCard>
  );
}

export default UserCard;
