import React from "react";
import { Container } from "react-bootstrap";
import CardFavMovie from "../../components/CardFavMovie";

export default function Favorite() {
  return (
    <>
      <Container>
        <div className="my-5">
          <h2 className="fw-bold text-center">Favorite</h2>
        </div>

        <div className="d-flex flex-wrap justify-content-around">
          <CardFavMovie />
        </div>
      </Container>
    </>
  );
}
