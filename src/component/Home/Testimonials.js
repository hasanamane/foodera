import React from "react";
import "./Testimonials.css";
import photo from "../../assets/myphoto2.jpg";
import { Carousel } from "react-bootstrap";
function Testimonials() {
  return (
    <>
      <section className="slider">
        <div className="container">
            
          <div className="row">
            <div className="col-lg-12 col-md-12">
                <h2>Testimonials</h2>
                </div>
                </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={photo} />
                  <Carousel.Caption>
                    <h3>
                      <span >Full Stack Developer</span>
                    </h3>
                    <p>
                    Nulla vitae  Nulla vitae  Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={photo} />

                  <Carousel.Caption>
                    <h3>
                      <span>Hasan Amana Front-End</span>
                    </h3>
                    <p>
                      Lorem Nulla vitae  Nulla vitae  ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={photo} />

                  <Carousel.Caption>
                    <h3>
                      <span>Hasan Amana Back-End</span>
                    </h3>
                    <p>
                      Praesent Nulla vitae  Nulla vitae  commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
