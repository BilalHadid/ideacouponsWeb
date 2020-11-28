import React from "react";
import "./foot.css";
import img1 from "../webcomponent/logo.png";
import { Link } from "react-router-dom";
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
                    <Link to="/">
                      <img src={img1} className="img-fluid" alt="logo" />
                    </Link>
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                      <Link to="/coupons">Coupons</Link>
                    </li>
                    <li>
                      <Link to="/coupons">Deals</Link>
                    </li>
                    <li>
                      <Link to="/stores">Store</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">About us</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact us</Link>
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/terms">Terms</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Privacy</Link>
                    </li>

                    <li>
                      <Link to="/contactus">Contact</Link>
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
