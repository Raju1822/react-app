import React, { Component } from "react";
import '../css/Header.css';
import NIT_Raipur from '../img/NIT_Raipur.jpg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <header className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
          <a className="navbar-brand" href="/">
          {/* <img src={NIT_Raipur} alt="page-icon"></img> */}
          NIT Raipur
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/"> <i class="fa fa-home mr-2"></i>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><i class="fa fa-search mr-2"></i>
                  Search
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-user mr-2"></i>
                  Logins
                </a>
                <div
                  className="dropdown-menu p-2 my-2"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/authority-login">
                    Authority Login
                  </a>
                  <a className="dropdown-item" href="/employee-login">
                    Employee Login
                  </a>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><i className="fa fa-file mr-2" />
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">  <i class="fa fa-phone mr-2"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        </header>
      </div>
    );
  }
}

export default Header;
