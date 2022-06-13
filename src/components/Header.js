import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import pizza1 from "../data/images/gallery2.png";
import pizza2 from "../data/images/gallery3.png";
import pizza3 from "../data/images/gallery6.png";

const Header = () => {

  return (
      <div className="header pt-5 pb-5">
          <Container>
              <Carousel>
                  <Carousel.Item>
                      <Row className="pt-4 pb-4">
                          <div className="col-md-6 d-flex justify-content-center align-items-center">
                              <div className="text d-flex justify-content-center  align-items-center flex-column">
                                  <h2 className="fs-2 fw-bold">hot & spicy</h2>
                                  <p className="d-block fs-1 fw-bold text-warning">
                                      pizza
                                  </p>
                                  <div className="offer d-flex justify-content-center  align-items-center flex-column">
                                      <span className="d-block">50% off</span>
                                      <hr />
                                      <span className="d-block">order now</span>
                                      <hr />
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-6 d-flex justify-content-center align-items-center ">
                              <img
                                  src={pizza1}
                                  alt="pizza"
                                  width="400px"
                                  height="400px"
                              />
                          </div>
                      </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Row className="flex-row-reverse pt-4 pb-4">
                          <div className="col-md-6 d-flex justify-content-center align-items-center">
                              <div className="text d-flex justify-content-center  align-items-center flex-column">
                                  <h2 className="fs-3 fw-bold">best</h2>
                                  <p className="d-block fs-3 fw-bold">
                                      homemade
                                  </p>
                                  <div className="offer d-flex justify-content-center align-items-center flex-column">
                                      <span className="d-block fs-1 text-warning ">
                                          pizza
                                      </span>
                                      <hr />
                                      <span className="">is here</span>
                                      <hr />
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6  d-flex justify-content-center align-items-center">
                              <img
                                  src={pizza2}
                                  alt="pizza"
                                  width="400px"
                                  height="400px"
                              />
                          </div>
                      </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Row className="pt-4 pb-4 ">
                          <div className="col-md-6 d-flex justify-content-center align-items-center">
                              <div className="text d-flex justify-content-center  align-items-center flex-column">
                                  <h2 className="fs-2 fw-bold">hot & spicy</h2>
                                  <p className="d-block fs-1 fw-bold text-warning">
                                      pizza
                                  </p>
                                  <div className="offer d-flex justify-content-center  align-items-center flex-column">
                                      <span className="d-block">50% off</span>
                                      <hr />
                                      <span className="d-block">order now</span>
                                      <hr />
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6  d-flex justify-content-center align-items-center">
                              <img
                                  src={pizza3}
                                  alt="pizza"
                                  width="400px"
                                  height="400px"
                              />
                          </div>
                      </Row>
                  </Carousel.Item>
              </Carousel>
          </Container>
      </div>
  );
};

export default Header;
