import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export default function MyButton() {
  const [buttonText, setButtonText] = useState("Hide");
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setButtonText(buttonText === "Reveal" ? "Hide" : "Reveal");
    setShowImage(!showImage);
  };
  useEffect(() => {
    if (showImage) {
      console.log("Hello");
    } else {
      console.log("Bye");
    }
    setShowImage(false);
  }, [showImage]);
  return (
    <div>
      {pokeImage}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export const RowEntry = (props) => {
  const pokeImage = <img src={props.image} />;
  return (
    <Row className="table-row">
      <Col className="table-cell">{props.name}</Col>
      <Col className="table-cell">{props.type}</Col>
      <Col className="table-cell">
        {pokeImage} <MyButton></MyButton>
      </Col>
    </Row>
  );
};
