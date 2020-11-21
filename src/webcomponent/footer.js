import React from "react";
import "./foot.css";
import img1 from "../webcomponent/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div
          className=""
          style={{ width: "100%", marginTop: "25px", marginLeft: "-10px" }}
        >
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-map-marker"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue,</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "25px" }}>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="https://github.com/bilalhadid">
                      <img src={img1} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text" style={{ width: "50%" }}>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="https://github.com/bilalhadid">
                      <i className="fa fa-facebook facebook-bg"></i>
                    </a>
                    <a href="https://github.com/bilalhadid">
                      <i className="fa fa-twitter twitter-bg"></i>
                    </a>
                    <a href="https://github.com/bilalhadid">
                      <i className="fa fa-google-plus google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="https://github.com/bilalhadid">Home</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Categories</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Coupons</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Deals</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Store</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">About us</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Our Services</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Expert Team</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Contact us</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2020, All Right Reserved{" "}
                    <a href="https://github.com/bilalhadid">Bilal</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="https://github.com/bilalhadid">Home</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Terms</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Privacy</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Policy</a>
                    </li>
                    <li>
                      <a href="https://github.com/bilalhadid">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
