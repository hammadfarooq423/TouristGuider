import React from "react";
import ava01 from "../../../images/ava-1.jpg";
import ava02 from "../../../images/ava-2.jpg";
import ava03 from "../../../images/ava-3.jpg";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Testimonial = () => {
  const settings = {
    dots: true,
    Infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:576,
        settings:{
            slidesToShow:1,
            slidesToScroll:1
        }
      }
    ],
  };
  return ( 
    
      <Slider {...settings}>
        <div className="testimonial py-4 px3">
          <p>
            Traveling is a brutality. It forces you to trust strangers and to
            lose sight of all that familiar comfort of home and friends. You are
            constantly off balance. Nothing is yours except the essential
            things: air, sleep, dreams, the sea, the sky - all things tending
            towards the eternal or what we imagine of it
          </p>
          <div className="d-flex align-items-center mx-3 mt-3 ">
            <img
              src={ava01}
              className="w-25 h-25 mx-3"
              style={{borderRadius:"0.5rem"}}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-0 mt-3">shehryar</h5>
              <p>Customer</p>
            </div>
          </div>
        
        </div>
        <div className="testimonial py-4 px3">
          <p>
            Traveling is a brutality. It forces you to trust strangers and to
            lose sight of all that familiar comfort of home and friends. You are
            constantly off balance. Nothing is yours except the essential
            things: air, sleep, dreams, the sea, the sky - all things tending
            towards the eternal or what we imagine of it
          </p>
          <div className="d-flex align-items-center mx-3 mt-3 ">
            <img
              src={ava02}
              className="w-25 h-25 mx-3"
              style={{borderRadius:"0.5rem"}}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-0 mt-3">Eman</h5>
              <p>Customer</p>
            </div>
          </div>
        
        </div>
        <div className="testimonial py-4 px3">
          <p>
            Traveling is a brutality. It forces you to trust strangers and to
            lose sight of all that familiar comfort of home and friends. You are
            constantly off balance. Nothing is yours except the essential
            things: air, sleep, dreams, the sea, the sky - all things tending
            towards the eternal or what we imagine of it
          </p>
          <div className="d-flex align-items-center mx-3 mt-3 ">
            <img
              src={ava03}
              className="w-25 h-25 mx-3"
              style={{borderRadius:"0.5rem"}}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-0 mt-3">Hassan</h5>
              <p>Customer</p>
            </div>
          </div>
        
        </div>
        <div className="testimonial py-4 px3">
          <p>
            Traveling is a brutality. It forces you to trust strangers and to
            lose sight of all that familiar comfort of home and friends. You are
            constantly off balance. Nothing is yours except the essential
            things: air, sleep, dreams, the sea, the sky - all things tending
            towards the eternal or what we imagine of it
          </p>
          <div className="d-flex align-items-center mx-3 mt-3 ">
            <img
              src={ava01}
              className="w-25 h-25 mx-3"
              style={{borderRadius:"0.5rem"}}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-0 mt-3">Ayan</h5>
              <p>Customer</p>
            </div>
          </div>
          
        </div>
        <div className="testimonial py-4 px3">
          <p>
            Traveling is a brutality. It forces you to trust strangers and to
            lose sight of all that familiar comfort of home and friends. You are
            constantly off balance. Nothing is yours except the essential
            things: air, sleep, dreams, the sea, the sky - all things tending
            towards the eternal or what we imagine of it
          </p>
          <div className="d-flex align-items-center mx-3 mt-3 ">
            <img
              src={ava03}
              className="w-25 h-25 mx-3"
              style={{borderRadius:"0.5rem"}}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-0 mt-3">Arham</h5>
              <p>Customer</p>
            </div>
          </div>
       
        </div>
      </Slider>
    
  );
};

export default Testimonial;
