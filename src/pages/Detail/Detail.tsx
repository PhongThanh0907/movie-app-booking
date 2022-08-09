import { useEffect } from "react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "services/movieAPI";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./detail.style.scss";
import MovieTab from "./MovieTab";
import { Link } from "react-router-dom";

const Detail = () => {
  let { detailID } = useParams();
  const [movie, setMovie] = useState<any>([]);
  const [lgShow, setLgShow] = useState(false);

  const fetchMovie = async () => {
    try {
      const response = await movieAPI.getDetailMovie(detailID);
      setMovie(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [detailID]);

  return (
    <div className="detail">
      <div style={{ width: "1100px" }} className="container">
        <div className="detail__area">
          <div className="detail__img" style={{ width: "30%" }}>
            <img style={{ width: "80%" }} src={movie.hinhAnh} alt="" />

            <Button className="button_banner" onClick={() => setLgShow(true)}>
              <PlayArrowIcon
                style={{ fontSize: "40px" }}
                className="button_detail"
              />
            </Button>

            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <iframe
                width={"100%"}
                height={500}
                src={movie.trailer}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Modal>
          </div>
          <div style={{ width: "40%" }}>
            <h2 style={{ fontSize: "22px", color: "#efeded" }}>
              {movie.tenPhim}
            </h2>
            <p
              style={{ fontSize: "15px", color: "#efeded", paddingTop: "20px" }}
            >
              {movie.moTa}
            </p>
                <Button style={{ width: "100%", backgroundColor: "#ff1744" }}>
                <Link
                        to={`/cinema/${movie.maPhim}`}
                      >
                  Mua Vé
                  </Link>
              </Button>
          </div>
          <div style={{ width: "30%", textAlign: "center" }}>
            <h1 className="detail__circle">{movie.danhGia} điểm</h1>
          </div>
        </div>
        <hr style={{ height: "3px", backgroundColor: "#efeded" }} />
      </div>
      <MovieTab id={movie.maPhim} />
    </div>
  );
};

export default Detail;
