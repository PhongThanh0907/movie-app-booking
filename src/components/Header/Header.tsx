import "./header.styles.scss";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <div className="header shadow">
      <div className="header__wrap">
        <div className="header__logo">
          <Link to="/">
            <img src="img/tix-logo.png" alt="logo" />
          </Link>
        </div>
        <div className="header__nav">
          <a href="#lichChieu">Lịch Chiếu</a>

          <a href="#cumrap">Cụm Rạp</a>

          <a href="#tinTuc">Tin Tức</a>

          <a href="#ungDung">Ứng Dụng</a>
        </div>

        <UserNav />
      </div>
    </div>
  );
};

export default Header;
