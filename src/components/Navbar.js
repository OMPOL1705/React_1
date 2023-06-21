import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {props.new}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className={`form-check text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                onClick={()=>{props.onToggle("null")}}
                id="defaultCheck1"
              />
              <label className="form-check-label light" htmlFor="defaultCheck1">
                Enable Darkmode
              </label>
            </div>
            <form className="form-inline my-2 my-lg-0 mx-3">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  new: PropTypes.string,
};

Navbar.defaultProps = {
  title: "hiii",
  new: "Home",
};
