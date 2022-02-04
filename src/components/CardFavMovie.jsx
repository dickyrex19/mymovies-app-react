import React from "react";
import { Card } from "react-bootstrap";

export default function CardFavMovie() {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Spider-Man: No Way Home</Card.Title>
          <Card.Text>Dec 15, 2021</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
