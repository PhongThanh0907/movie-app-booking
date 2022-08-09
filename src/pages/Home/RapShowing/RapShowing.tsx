import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store";
import { getCinemaList } from "slices/cinemas";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./rapshowing.styles.scss";

const RapShowing = () => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.cinemas
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);

  if (isLoading) {
    return <h1></h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="rap__showing" style={{ padding: "50px 0" }} id="cumrap">
      <div
        className="container"
        style={{
          margin: "0 auto",
          width: "1000px",
          boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
          padding: "100px, 0",
        }}
      >
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <img
                      style={{ width: "50px" }}
                      src="./img/bhd-star-cineplex.png"
                      alt=""
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <img src="./img/cgv.png" alt="" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="three">
                    <img src="./img/purple_logo.png" alt="" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">
                    <img src="./img/galaxy_logo.png" alt="" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">
                    <img src="./img/lotte_logo.png" alt="" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="six">
                    <img src="./img/mega_logo.png" alt="" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="rapshowing__area">
                    <div>
                      <h4>BHD Star Cineplex - Bitexco</h4>
                      <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Vincom Lê Văn Việt</h4>
                      <p>L4-Vincom Plaza, 50 Lê Văn Việt, Q.9</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Vincom Quang Trung</h4>
                      <p>B1-Vincom QT, 190 Quang Trung, Gò Vấp</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - 3/2</h4>
                      <p>L5-Vincom 3/2, 3C Đường 3/2, Q.10</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Phạm Hùng</h4>
                      <p>L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Vincom Thảo Điền</h4>
                      <p>L5-Megamall, 159 XL Hà Nội, Q.2</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="rapshowing__area">
                    <div>
                      <h4>CGV - Aeon Bình Tân</h4>
                      <p>
                        Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu
                        phố 11, Bình Trị Đông B, Bình Tân
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Aeon Tân Phú</h4>
                      <p>30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú</p>
                    </div>
                    <div>
                      <h4>CGV - Crescent Mall</h4>
                      <p>
                        Lầu 5, Crescent Mall, Đại lộ Nguyễn Văn Linh, Phú Mỹ
                        Hưng, Q. 7
                      </p>
                    </div>
                    <div>
                      <h4>CGV - CT Plaza</h4>
                      <p>60A Trường Sơn,P. 2, Tân Bình</p>
                    </div>
                    <div>
                      <h4>CGV - Hoàng Văn Thụ</h4>
                      <p>
                        Tầng 1 và 2 Gala Center, 415 Hoàng Văn Thụ, P. 2, Tân
                        Bình
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Hùng Vương Plaza</h4>
                      <p>Lầu 7, 126 Hùng Vương, Q. 5</p>
                    </div>
                    <div>
                      <h4>CGV - Liberty Citypoint</h4>
                      <p>
                        Tầng M - 1, khách sạn Liberty Center Saigon Citypoint,
                        59 - 61 Pateur, Q. 1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Pandora City</h4>
                      <p>Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú</p>
                    </div>
                    <div>
                      <h4>CGV - Parkson Đồng Khởi</h4>
                      <p>
                        Tầng 5 Parkson Đồng Khởi, 35bis-45 Lê Thánh Tôn, Bến
                        Nghé, Q.1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Sư Vạn Hạnh</h4>
                      <p>T6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10</p>
                    </div>
                    <div>
                      <h4>CGV - Vincom Đồng Khởi</h4>
                      <p>
                        Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé,
                        Q. 1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Vincom Landmark 81</h4>
                      <p>
                        T B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên
                        Phủ, P.22, Q. Bình Thạnh, HCM
                      </p>
                    </div>
                    <div>
                      <h4>CGV - CGV Saigonres Nguyễn Xí</h4>
                      <p>
                        Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình
                        Thạnh
                      </p>
                    </div>
                    <div>
                      <h4>CGV - IMC Trần Quang Khải</h4>
                      <p>
                        T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Vincom Thủ Đức</h4>
                      <p>
                        Tầng 5 Vincom Thủ Đức, 216 Võ Văn Ngân, Bình Thọ, Thủ
                        Đức
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Vincom Gò Vấp</h4>
                      <p>
                        Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7,
                        Gò Vấp
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <div className="rapshowing__area">
                    <div>
                      <h4>CNS - Hai Bà Trưng</h4>
                      <p>135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]</p>
                    </div>
                    <div>
                      <h4>CNS - Quốc Thanh</h4>
                      <p>271 Nguyễn Trãi, Q.1</p>
                    </div>
                    <div>
                      <h4>CNS - Hai Bà Trưng</h4>
                      <p>135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <div className="rapshowing__area">
                    <div>
                      <h4>GLX - Kinh Dương Vương</h4>
                      <p>718bis Kinh Dương Vương, Q.6</p>
                    </div>
                    <div>
                      <h4>GLX - Nguyễn Du</h4>
                      <p>116 Nguyễn Du, Q.1</p>
                    </div>
                    <div>
                      <h4>GLX - Phạm Văn Chí</h4>
                      <p>Lầu 5, TTTM Platinum Plaza, 634 Phạm Văn Chí, Q.6</p>
                    </div>
                    <div>
                      <h4>GLX - Quang Trung</h4>
                      <p>L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp</p>
                    </div>
                    <div>
                      <h4>GLX - Trung Chánh</h4>
                      <p>TTVH Q12 – 09, Q L 22, Trung Mỹ Tây , Q.12</p>
                    </div>
                    <div>
                      <h4>GLX - Huỳnh Tấn Phát</h4>
                      <p>1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7</p>
                    </div>
                    <div>
                      <h4>GLX - Tân Bình</h4>
                      <p>246 Nguyễn Hồng Đào, Tân Bình</p>
                    </div>
                    <div>
                      <h4>GLX - Nguyễn Văn Quá</h4>
                      <p>119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <div className="rapshowing__area">
                    <div>
                      <h4>Lotte - Cantavil</h4>
                      <p>L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2</p>
                    </div>
                    <div>
                      <h4>Lotte - Diamond</h4>
                      <p>L13-Diamond Plaza, 34 Lê Duẩn, Q.1</p>
                    </div>
                    <div>
                      <h4>Lotte - Gò Vấp</h4>
                      <p>L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp</p>
                    </div>
                    <div>
                      <h4>Lotte - Nowzone</h4>
                      <p>L5-Nowzone, 235 Nguyễn Văn Cừ, Q.1</p>
                    </div>
                    <div>
                      <h4>Lotte - Phú Thọ</h4>
                      <p>L4-Lotte Mart Phú Thọ, Q.11</p>
                    </div>
                    <div>
                      <h4>Lotte - Cộng Hòa</h4>
                      <p>L4-Pico Plaza, 20 Cộng Hòa, Tân Bình</p>
                    </div>
                    <div>
                      <h4>Lotte - Thủ Đức</h4>
                      <p>L2-Joy Citipoint, KCX Linh Trung, Thủ Đức</p>
                    </div>
                    <div>
                      <h4>Lotte - Nam Sài Gòn</h4>
                      <p>L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="six">
                  <div className="rapshowing__area">
                    <div>
                      <h4>MegaGS - Cao Thắng</h4>
                      <p>19 Cao Thắng, Q.3</p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default RapShowing;
