import React, { useState, useEffect } from "react";

export default function CardMovie(props) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    if (props.id) {
      setId(props.id);
    }
    if (props.title) {
      setTitle(props.title);
    }
    if (props.poster) {
      setPoster(props.poster);
    }
    if (props.releaseDate) {
      setReleaseDate(props.releaseDate);
    }
  }, [props]);
  return (
    <>
      <a href={`/detail/${id}`}>
        <div className="card m-4" style={{ width: "12rem" }}>
          <img
            className="card-img-top shadow"
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt="Movie Poster"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{releaseDate}</p>
          </div>
        </div>
      </a>
    </>
  );
}
