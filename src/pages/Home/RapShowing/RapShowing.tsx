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
                      <p>L3-Bitexco Icon 68, 2 H???i Tri???u, Q.1</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Vincom L?? V??n Vi???t</h4>
                      <p>L4-Vincom Plaza, 50 L?? V??n Vi???t, Q.9</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Vincom Quang Trung</h4>
                      <p>B1-Vincom QT, 190 Quang Trung, G?? V???p</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - 3/2</h4>
                      <p>L5-Vincom 3/2, 3C ???????ng 3/2, Q.10</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Ph???m H??ng</h4>
                      <p>L4-Satra Ph???m H??ng, C6/27 Ph???m H??ng, B??nh Ch??nh</p>
                    </div>
                    <div>
                      <h4>BHD Star Cineplex - Vincom Th???o ??i???n</h4>
                      <p>L5-Megamall, 159 XL H?? N???i, Q.2</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="rapshowing__area">
                    <div>
                      <h4>CGV - Aeon B??nh T??n</h4>
                      <p>
                        T???ng 3, TTTM Aeon Mall B??nh T??n, S??? 1 ???????ng s??? 17A, khu
                        ph??? 11, B??nh Tr??? ????ng B, B??nh T??n
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Aeon T??n Ph??</h4>
                      <p>30 B??? Bao T??n Th???ng, S??n K???, T??n Ph??</p>
                    </div>
                    <div>
                      <h4>CGV - Crescent Mall</h4>
                      <p>
                        L???u 5, Crescent Mall, ?????i l??? Nguy???n V??n Linh, Ph?? M???
                        H??ng, Q. 7
                      </p>
                    </div>
                    <div>
                      <h4>CGV - CT Plaza</h4>
                      <p>60A Tr?????ng S??n,P. 2, T??n B??nh</p>
                    </div>
                    <div>
                      <h4>CGV - Ho??ng V??n Th???</h4>
                      <p>
                        T???ng 1 v?? 2 Gala Center, 415 Ho??ng V??n Th???, P. 2, T??n
                        B??nh
                      </p>
                    </div>
                    <div>
                      <h4>CGV - H??ng V????ng Plaza</h4>
                      <p>L???u 7, 126 H??ng V????ng, Q. 5</p>
                    </div>
                    <div>
                      <h4>CGV - Liberty Citypoint</h4>
                      <p>
                        T???ng M - 1, kh??ch s???n Liberty Center Saigon Citypoint,
                        59 - 61 Pateur, Q. 1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Pandora City</h4>
                      <p>L???u 3, Pandora City, 1/1 Tr?????ng Chinh, T??n Ph??</p>
                    </div>
                    <div>
                      <h4>CGV - Parkson ?????ng Kh???i</h4>
                      <p>
                        T???ng 5 Parkson ?????ng Kh???i, 35bis-45 L?? Th??nh T??n, B???n
                        Ngh??, Q.1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - S?? V???n H???nh</h4>
                      <p>T6 V???n H???nh Mall, 11 S?? V???n H???nh, Qu???n 10</p>
                    </div>
                    <div>
                      <h4>CGV - Vincom ?????ng Kh???i</h4>
                      <p>
                        T???ng 3, TTTM Vincom Center B, 72 L?? Th??nh T??n, B???n Ngh??,
                        Q. 1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Vincom Landmark 81</h4>
                      <p>
                        T B1 , TTTM Vincom Center Landmark 81, 772 ??i???n Bi??n
                        Ph???, P.22, Q. B??nh Th???nh, HCM
                      </p>
                    </div>
                    <div>
                      <h4>CGV - CGV Saigonres Nguy???n X??</h4>
                      <p>
                        T???ng 4-5, Saigonres Plaza, 79/81 Nguy???n X??, P. 26, B??nh
                        Th???nh
                      </p>
                    </div>
                    <div>
                      <h4>CGV - IMC Tr???n Quang Kh???i</h4>
                      <p>
                        T2&3, TTVH ??a N??ng, 62 Tr???n Quang Kh???i, P.T??n ?????nh, Q.1
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Vincom Th??? ?????c</h4>
                      <p>
                        T???ng 5 Vincom Th??? ?????c, 216 V?? V??n Ng??n, B??nh Th???, Th???
                        ?????c
                      </p>
                    </div>
                    <div>
                      <h4>CGV - Vincom G?? V???p</h4>
                      <p>
                        T???ng 5 TTTM Vincom Plaza G?? V???p, 12 Phan V??n Tr???, P. 7,
                        G?? V???p
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <div className="rapshowing__area">
                    <div>
                      <h4>CNS - Hai B?? Tr??ng</h4>
                      <p>135 Hai B?? Tr??ng, B???n Ngh??, Q.1[B???n ?????]</p>
                    </div>
                    <div>
                      <h4>CNS - Qu???c Thanh</h4>
                      <p>271 Nguy???n Tr??i, Q.1</p>
                    </div>
                    <div>
                      <h4>CNS - Hai B?? Tr??ng</h4>
                      <p>135 Hai B?? Tr??ng, B???n Ngh??, Q.1[B???n ?????]</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <div className="rapshowing__area">
                    <div>
                      <h4>GLX - Kinh D????ng V????ng</h4>
                      <p>718bis Kinh D????ng V????ng, Q.6</p>
                    </div>
                    <div>
                      <h4>GLX - Nguy???n Du</h4>
                      <p>116 Nguy???n Du, Q.1</p>
                    </div>
                    <div>
                      <h4>GLX - Ph???m V??n Ch??</h4>
                      <p>L???u 5, TTTM Platinum Plaza, 634 Ph???m V??n Ch??, Q.6</p>
                    </div>
                    <div>
                      <h4>GLX - Quang Trung</h4>
                      <p>L3-Co.opmart Foodcosa, 304A Quang Trung, G?? V???p</p>
                    </div>
                    <div>
                      <h4>GLX - Trung Ch??nh</h4>
                      <p>TTVH Q12 ??? 09, Q L 22, Trung M??? T??y , Q.12</p>
                    </div>
                    <div>
                      <h4>GLX - Hu???nh T???n Ph??t</h4>
                      <p>1362 Hu???nh T???n Ph??t, KP1, Ph?? M???, Q. 7</p>
                    </div>
                    <div>
                      <h4>GLX - T??n B??nh</h4>
                      <p>246 Nguy???n H???ng ????o, T??n B??nh</p>
                    </div>
                    <div>
                      <h4>GLX - Nguy???n V??n Qu??</h4>
                      <p>119B Nguy???n V??n Qu??, ????ng H??ng Thu???n, Q.12, TPHCM</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <div className="rapshowing__area">
                    <div>
                      <h4>Lotte - Cantavil</h4>
                      <p>L7-Cantavil Premier, Xa L??? H?? N???i, Q.2</p>
                    </div>
                    <div>
                      <h4>Lotte - Diamond</h4>
                      <p>L13-Diamond Plaza, 34 L?? Du???n, Q.1</p>
                    </div>
                    <div>
                      <h4>Lotte - G?? V???p</h4>
                      <p>L3-Lotte Mart, 242 Nguy???n V??n L?????ng, G?? V???p</p>
                    </div>
                    <div>
                      <h4>Lotte - Nowzone</h4>
                      <p>L5-Nowzone, 235 Nguy???n V??n C???, Q.1</p>
                    </div>
                    <div>
                      <h4>Lotte - Ph?? Th???</h4>
                      <p>L4-Lotte Mart Ph?? Th???, Q.11</p>
                    </div>
                    <div>
                      <h4>Lotte - C???ng H??a</h4>
                      <p>L4-Pico Plaza, 20 C???ng H??a, T??n B??nh</p>
                    </div>
                    <div>
                      <h4>Lotte - Th??? ?????c</h4>
                      <p>L2-Joy Citipoint, KCX Linh Trung, Th??? ?????c</p>
                    </div>
                    <div>
                      <h4>Lotte - Nam S??i G??n</h4>
                      <p>L3-Lotte Mart NSG, 469 Nguy???n H???u Th???, Q.7</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="six">
                  <div className="rapshowing__area">
                    <div>
                      <h4>MegaGS - Cao Th???ng</h4>
                      <p>19 Cao Th???ng, Q.3</p>
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
