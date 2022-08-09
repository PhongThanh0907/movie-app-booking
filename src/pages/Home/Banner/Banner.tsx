import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Banner = () => {
  const [lgShow, setLgShow] = useState(false);
  const [lgShow1, setLgShow1] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "700px" }}
          src="https://www.filmyt.com/wp-content/uploads/2021/08/thor-love-and-thunder-2022.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Button className="button_banner" onClick={() => setLgShow3(true)}>
            <PlayArrowIcon className="icon_button" />
          </Button>

          <Modal
            size="lg"
            show={lgShow3}
            onHide={() => setLgShow3(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <iframe
              width={"100%"}
              height={500}
              src="https://www.youtube.com/embed/UBgPypHGAqE"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Modal>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "700px" }}
          src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Button className="button_banner" onClick={() => setLgShow(true)}>
            <PlayArrowIcon className="icon_button" />
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
              src="https://www.youtube.com/embed/uqJ9u7GSaYM"
              title="Phimbàn tay diệt quỷ trailer | kc 09.04.2021"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Modal>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "700px" }}
          src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button className="button_banner" onClick={() => setLgShow1(true)}>
            <PlayArrowIcon className="icon_button" />
          </Button>

          <Modal
            size="lg"
            show={lgShow1}
            onHide={() => setLgShow1(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <iframe
              width={"100%"}
              height={500}
              src="https://www.youtube.com/embed/kBY2k3G6LsM"
              title="LẬT MẶT: 48H - Ly Hai Production | Official Trailer | Khởi Chiếu 16.04.2021"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Modal>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "700px" }}
          src="https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png"
          alt="Four slide"
        />

        <Carousel.Caption>
          <Button className="button_banner" onClick={() => setLgShow2(true)}>
            <PlayArrowIcon className="icon_button" />
          </Button>

          <Modal
            size="lg"
            show={lgShow2}
            onHide={() => setLgShow2(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <iframe
              width={"100%"}
              height={500}
              src="https://www.youtube.com/embed/JNZv1SgHv68"
              title="(Official Trailer) SEOBOK - NGƯỜI NHÂN BẢN | KC: 15.04.2021"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Modal>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
