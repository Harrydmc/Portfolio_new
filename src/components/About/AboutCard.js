import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haris Dominic Savier </span>
            from <span className="purple"> Palakkad, India.</span>
            <br />
            Currently pursuing my bachelor's degree of Computer And Communication
            <br />
            I am an Open Source Android Developer  who
            enjoy tinkering, changing, and breaking the Android operating system.
            <br />
            <br />
            Apart from Writing CloudFormation Template, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography/Cinematography 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Fitness
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
