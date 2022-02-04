import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { Container, Spinner } from "react-bootstrap";
import SectionDetail from "../../components/sectionDetail";

export default function DetailMovie() {
  let params = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [overview, setOverview] = useState("");

  useEffect(() => {
    const getDetail = () => {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=9c02ef2a3844e2b1bae6dd966a696852&language=en-US`
        )
        .then((res) => {
          setTitle(res.data.original_title);
          setPoster(res.data.poster_path);
          setReleaseDate(res.data.release_date);
          setRating(res.data.vote_average);
          setDuration(res.data.runtime);
          setOverview(res.data.overview);
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
    getDetail();
  }, [params]);

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
          <SectionDetail
            title={title}
            poster={poster}
            releaseDate={moment(releaseDate).format("MMMM DD, YYYY")}
            rating={rating}
            duration={duration}
            overview={overview}
          />
        </Container>
      </>
    );
  };

  return <>{returnLoading()}</>;
}
