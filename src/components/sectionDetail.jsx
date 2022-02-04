import React, { useState, useEffect } from "react";

export default function SectionDetail(props) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [overview, setOverview] = useState("");

  useEffect(() => {
    if (props.title) {
      setTitle(props.title);
    }
    if (props.poster) {
      setPoster(props.poster);
    }
    if (props.releaseDate) {
      setReleaseDate(props.releaseDate);
    }
    if (props.rating) {
      setRating(props.rating);
    }
    if (props.duration) {
      setDuration(props.duration);
    }
    if (props.overview) {
      setOverview(props.overview);
    }
  }, [props]);

  return (
    <>
      <div className="section-detail">
        <div className="my-5 d-flex align-items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt="poster"
            width={200}
            className="shadow"
          />
          <div className="highlight-data ms-5">
            <h1 className="fw-bold mb-3">{title}</h1>
            <h5 className="fw-normal">Release : {releaseDate}</h5>
            <h5 className="fw-normal">Rating : {rating}</h5>
            <h5 className="fw-normal">Duration : {duration} min</h5>
          </div>
        </div>
        <div className="overview">
          <h2 className="fw-bold">Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
}
