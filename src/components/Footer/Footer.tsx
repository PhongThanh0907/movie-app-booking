import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="my__footer">
      <div className="container">
        <div className="footer__top">
          {" "}
          <div className="row">
            <div className="col-xl-4 my__content">
              <div className="row">
                <div className="col-12">
                  <h4>TIX</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>
                    {" "}
                    <a href="https://tix.vn/faq">FAQ</a>
                  </p>
                  <p>
                    {" "}
                    <a href="https://tix.vn/brand-guideline/">
                      Brand guidelines
                    </a>
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    {" "}
                    <a href="https://tix.vn/thoa-thuan-su-dung">
                      Thỏa thuận sử dụng
                    </a>
                  </p>
                  <p>
                    <a href="https://tix.vn/chinh-sach-bao-mat">
                      Chính sách bảo mật{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-8 my__logo">
              <h4>ĐỐI TÁC</h4>
              <div className="row">
                <div className="col">
                  <div>
                    <img src="img/CGV_logo.svg" alt="cvg logo" />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src="/img/BHD_logo.svg" alt="cvg logo" />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src="/img/purple_logo.png" alt="cvg logo" />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src="img/beta_logo.jpeg" alt="cvg logo" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <img src="/img/mega_logo.png" alt="cvg logo" />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src="/img/ddc_logo.png" alt="cvg logo" />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src="/img//cinemaX_logo.jpeg" alt="cvg logo" />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src="/img/dcine_logo.png" alt="cvg logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 my__icon">
              <div className="row">
                <div className="col-6 ">
                  <h4>MOBILE APP</h4>
                  <span style={{ padding: "0 5px" }}>
                    <AppleIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span>
                    <AndroidIcon style={{ fontSize: "40px" }} />
                  </span>
                </div>
                <div className="col-6 ">
                  <h4>SOCIAL</h4>

                  <span style={{ padding: "0 5px" }}>
                    <FacebookIcon style={{ fontSize: "40px" }} />
                  </span>

                  <span style={{ padding: "0 5px" }}>
                    <InstagramIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span>
                    <TwitterIcon style={{ fontSize: "40px" }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="footer__bottom">
          <div className="row">
            <div className="col-12 col-lg-1 footer__logobottom">
              <img src="img/footer-1.jpeg" alt="footer logo" />
            </div>
            <div className="col-12 col-lg-9">
              <div className="bottom__content">
                <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký
                  thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch
                  và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p>
                  Email: <span>support@tix.vn</span>
                </p>
                <p>
                  *Trang web được clone bởi Lê Văn Trọng cho mục đích học tập
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-2 footer__btimg">
              <img src="img/footer-2.png" alt="footer logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
