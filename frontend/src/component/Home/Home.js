import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import world from "../../images/world.png";
import experience from "../../images/experience.png";
import heroVideo from "../../images/hero.mp4";
import Subtitle from "./Shared/Shared";
import ServicesList from "./Shared/Services/ServicesList";
import Testimonial from "./Testimonial/Testimonial";
import GallaryMasnory from "./Gallary/GallaryMasnory";
// import Subtitle from "../components/Shared/Subtitle";
// import "../styles/Main.css"
// import Search from "../components/Shared/Search";
// import ServicesList from "../Services/ServicesList";
// import FeatureTourList from "../FeatureTour/FeatureTourList";
// import Gallary from "../components/Gallary/GallaryMasnory";
// import Testimonial from "../components/Testimonial/Testimonial";
// import { useState } from "react";
// import AlertContext from "../context/Alert/AlertContext";
// import { useEffect } from "react";
// import axios from "axios";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="TOURISM" />
          {/*                   hero section start                 */}
          <Container>
            <Row>
              <Col lg="6">
                <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={"Know before you go"} />
                    <img src={world} alt="world" />
                  </div>
                  <h1>
                    Traveling Open the door to creating{" "}
                    <span className="highlight">memories</span>
                  </h1>
                  <p>
                    Traveling is a brutality. It forces you to trust strangers
                    and to lose sight of all that familiar comfort of home and
                    friends. You are constantly off balance. Nothing is yours
                    except the essential things: air, sleep, dreams, the sea,
                    the sky - all things tending towards the eternal or what we
                    imagine of it
                  </p>
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box">
                  <img src={hero1} alt="hero1" />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box mt-4">
                  <video src={heroVideo} controls />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box mt-5">
                  <img src={hero2} alt="hero1" />
                </div>
              </Col>
              {/* <Search/> */}
            </Row>
          </Container>
          {/*                   hero section end                 */}

          {/*                   Services start                 */}
          <section>
            <Container>
              <Row>
                <Col lg="3">
                  <h5 className="services__subtitle">What we serve</h5>
                  <h2 className="services__title">
                    We offer our best services
                  </h2>
                </Col>
                <ServicesList />
              </Row>
            </Container>
          </section>
          {/*                   Services end                 */}
          <Container>
            <Col lg="12">
              {/* <Subtitle subtitle={"Explore"} style={{fontSize:"5rem"}}/>  */}
              <h2 className="homeHeading">Featured Packages</h2>
            </Col>
            {/* / is ko nai charna */}
            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </Container>
          {/* / is ko nai charna */}

          {/*       Experience section start             */}
          <section>
            <Container>
              <Row>
                <Col lg="6">
                  <div className="experience__content">
                    <Subtitle subtitle={"Experience"} />
                    <h2>
                      With our all experience <br /> we will serve you
                    </h2>
                    <p>
                      The biggest adventure you can ever take is to live the
                      life of your dreams
                      <br /> It reminds us that life is an adventure,
                    </p>
                  </div>
                  <div className="counter__wrapper d-flex align-items-centers justify-content-between mx-3">
                    <div className="counter__box">
                      <span>500+</span>
                      <h6>Successfull Tours</h6>
                    </div>
                    <div className="counter__box">
                      <span>2k+</span>
                      <h6>Regular Clients</h6>
                    </div>
                    <div className="counter__box">
                      <span>3</span>
                      <h6>Years Experience</h6>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="experience__img">
                    <img src={experience} alt="experience" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*       Experience section end             */}

          {/*       Gallary section start            */}
          <section>
            <Container>
              {/* <Row> */}
              <Col lg="12">
                <Subtitle subtitle={"Gallary"} />
                <h2 className="gallary__title">
                  Visit our customer tour gallary
                </h2>
              </Col>
              <Col lg="12">
                <GallaryMasnory />
              </Col>
              {/* </Row> */}
            </Container>
          </section>
          {/*       Gallary section end              */}

          {/*       Testimonial section star           */}
          <section>
            <Container>
              {/* <Row> */}
              <Col lg="12">
                <Subtitle subtitle={"Fan loves"} />
                <h2 className="testimonial__title">What fans say about us</h2>
              </Col>
              <Col lg="12">
                <Testimonial />
              </Col>
              {/* </Row> */}
            </Container>
          </section>
          {/*      Testimonial section end             */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

