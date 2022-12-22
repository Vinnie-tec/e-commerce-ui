import React from "react";
import {
  BsNewspaper,
  BsYoutube,
  BsWhatsapp,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center mb-0 text-white">
                <BsNewspaper />
                <h2 className="mb-0 text-white">Sign up for news letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Your email adress"
                  placeholder="Your email adress"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  West gate, Federal University of<br />Technology, Akure, Ondo
                  State.
                </address>
                <a
                  href="tel:+234 813 729 7591"
                  className="mt-1 d-block mb-2 text-white"
                >
                  +234 813 729 7591
                </a>
                <a
                  href="mailto:notamail@gmail.com"
                  className="mt-1 d-block mb-2 text-white"
                >
                  notamail@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a className="text-white" href="/">
                    <BsFacebook className="fs-10" />
                  </a>
                  <a className="text-white" href="/">
                    <BsLinkedin className="fs-10" />
                  </a>
                  <a className="text-white" href="/">
                    <BsWhatsapp className="fs-10" />
                  </a>
                  <a className="text-white" href="/">
                    <BsYoutube className="fs-10" />
                  </a>
                </div>
                {/* <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link> */}
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">SHipping Policy</Link>
                <Link className="text-white py-2 mb-1">
                  Terms and Condition
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; powered by Vinnie-tec
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
