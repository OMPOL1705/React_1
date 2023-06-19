import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  {props.new}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className={`form-check text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                onClick={props.onToggle}
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
  new: "goop",
};
