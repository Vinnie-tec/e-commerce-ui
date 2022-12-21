// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 mb-0">
              <p className="text-white">
                Free shipping over #4000 & free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline{" "}
                <a className="text-white" href="tel:+234 813 7297 591">
                  +234 813 7297 591
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        {/* <div className="container-xxl d-flex align-items-center justify-content-center gap-15"> */}
        <div className="container-xxl">
          <div className="col-2">
            <h2>
              <Link className="text-white">Dev Corner</Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Search Product here..."
                placeholder="Search Product here..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between gap-10">
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img
                    src="https://spng.pngfind.com/pngs/s/646-6466622_duffle-bag-png-tote-bag-transparent-png.png"
                    alt="compare"
                  />
                  <p className="mb-0">
                    Compare
                    <br />
                    products
                  </p>
                </Link>
              </div>
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img
                    src="https://spng.pngfind.com/pngs/s/646-6466622_duffle-bag-png-tote-bag-transparent-png.png"
                    alt="wishlist"
                  />
                  <p className="mb-0">
                    favourite<br></br>
                    wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img
                    src="https://spng.pngfind.com/pngs/s/646-6466622_duffle-bag-png-tote-bag-transparent-png.png"
                    alt="wishlist"
                  />
                  <p className="mb-0">
                    Log in<br></br>
                    My account
                  </p>
                </Link>
              </div>
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img
                    src="https://spng.pngfind.com/pngs/s/646-6466622_duffle-bag-png-tote-bag-transparent-png.png"
                    alt="wishlist"
                  />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">#120 000</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-buttom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-buttom d-flex align-items-center gaps-15">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BiCategoryAlt />
                      <span>Show Categories</span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="" to="/">
                      Home
                    </NavLink>
                    <NavLink className="" to="/">
                      Our Store
                    </NavLink>
                    <NavLink className="" to="/">
                      Blogs
                    </NavLink>
                    <NavLink className="" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
