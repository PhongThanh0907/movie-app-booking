import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./notfound.styles.scss";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="notfound">
      <div className="text-center">
        <h1 style={{ fontSize: "100px", color: "#efeded" }}>404</h1>
        <p style={{ color: "#aeaeae", fontSize: "30px" }}>
          Oops! Page not found
        </p>
        <Button variant="danger">
          <Link
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "#efeded",
            }}
            to="/"
          >
            Trang chủ
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
