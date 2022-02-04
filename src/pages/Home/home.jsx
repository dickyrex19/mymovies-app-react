import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Container, Spinner } from "react-bootstrap";
import CardMovie from "../../components/CardMovie";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    setLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=9c02ef2a3844e2b1bae6dd966a696852&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  };

  const returnLoading = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" />
        </div>
      );
    }
    return (
      <>
        <Container>
          <div className="mt-5">
            <h2 className="fw-bold text-center">Now Playing</h2>
          </div>

          <div className="d-flex flex-wrap justify-content-around">
            {movies.map((res, i) => (
              <CardMovie
                key={i}
                id={res.id}
                title={res.original_title}
                poster={res.poster_path}
                releaseDate={moment(res.release_date).format("MMMM DD, YYYY")}
              />
            ))}
          </div>
        </Container>
      </>
    );
  };

  return <>{returnLoading()}</>;
}
