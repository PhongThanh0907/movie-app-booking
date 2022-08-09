import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store";
import { getMovieList } from "slices/movies";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieShowing.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Spinner from 'components/Spinner/Spinner'

const MovieShowing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  if (isLoading) {
    return <Spinner />;;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="movie_showwing" id="lichChieu">
      <div className="container">
        <Slider {...settings}>
          {data.map((movie, index) => {
            return (
              <div key={index} className="movie_card">
                <Card key={movie.maPhim}>
                  <Card.Img variant="top" src={movie.hinhAnh} />
                  <Card.Body>
                    <Card.Title>
                      <span className="card-icon">C18</span>
                      <span>{movie.tenPhim}</span>{" "}
                    </Card.Title>
                    <Card.Text>{movie.biDanh}</Card.Text>
                    <Button className="btn_muave" variant="danger">
                      <Link
                        className="text-white w-full h-full block"
                        to={`/detail/${movie.maPhim}`}
                      >
                        Mua vé
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MovieShowing;
