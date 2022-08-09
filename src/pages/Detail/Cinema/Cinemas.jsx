import { useEffect } from "react";
import React, { useState } from "react";
import movieAPI from "services/movieAPI";
import { useParams } from "react-router-dom";
import MovieTicket from "./MovieTicket";
import "./cinema.styles.scss";

const Cinemas = () => {
  let { cinemaID } = useParams();
  const [cinema, setCinema] = useState([]);

  const fetchMovie = async () => {
    try {
      const response = await movieAPI.getDetailMovie(cinemaID);
      setCinema(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [cinemaID]);
  return (
    <div className="cinema">
      <div className="container">
        <div>
            <div className="seat__list">
              <MovieTicket />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cinemas;
