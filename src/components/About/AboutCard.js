import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sneha Joshi </span>
            from <span className="purple"> Vadodara, India.</span>
            <br />
            I am currently a Junior at Arizona State University.
            <br />
            I am pursuing B.S in Computer Science and a Minor in Business.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Small, consistent efforts, no matter how gradual, can grow into something truly extraordinary."{" "}
          </p>
          <footer className="blockquote-footer">Sneha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
