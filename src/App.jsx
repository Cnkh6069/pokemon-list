import logo from "/logo.png";
import pokemon from "/pokemon.jpeg";
import bulbasaur from "/bulbasaur.png";
import squirtle from "/squirtle.png";
import charmander from "/charmander.png";
import snorlax from "/snorlax.png";
import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { RowEntry } from "./Component/RowEntry";
import MyButton from "./Component/RowEntry";

// import "bootstrap/dist/css/bootstrap.min.css";

const pokemonList = [
  { name: "Bulbasaur", type: "Grass", image: bulbasaur },
  { name: "Squirtle", type: "Water", image: squirtle },
  { name: "Charmander", type: "Fire", image: charmander },
  { name: "Snorlax", type: "Normal", image: snorlax },
];

export default function App() {
  const Pokemons = pokemonList.map((pokemonItem, index) => {
    return (
      <RowEntry
        type={pokemonItem.type}
        name={pokemonItem.name}
        image={pokemonItem.image}
        key={index}
      />
    );
  });
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img src={pokemon} className="logo" alt="Pokemon logo" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Calvin's Pokemon List</h1>
          <p>Best Effort</p>
        </Col>
      </Row>
      <Row className="table-row">
        <Col className="table-cell">Pokemon Name</Col>
        <Col className="table-cell">Pokemon Type</Col>
        <Col className="table-cell">Pokemon Image</Col>
      </Row>
      {Pokemons}
    </Container>
  );
}
