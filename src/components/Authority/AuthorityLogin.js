import React, { Component } from "react";
import logo from "../../img/logo.jpg";

class AuthorityLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <div className="col-md-8 text-center display-6 my-4 ">
              <img className="img-fluid" src={logo} alt="pic-1" />
              <p>National Institute of Technology </p>
              <p> Raipur</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div className="text-center my-2 ">
              <h1 className="display-6">Authority Portal</h1>
              <div className="card border-0 shadow rounded-3 my-5 ">
                <div className="card-body p-4 p-sm-5 ">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Authority Sign In
                  </h5>
                  <form action="/auth-home">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="name@example.com"
                        id="email"
                      />
                      <label for="email">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        id="password"
                      />
                      <label for="password">Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        for="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        value="Submit"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                    <hr className="my-4" />
                    <div className="d-grid mb-2">
                      <button
                        className="btn btn-google btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        <i className="fa fa-google me-2"></i> Sign in with
                        Google
                      </button>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-facebook btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        <i className="fa fa-facebook-f me-2"></i> Sign in with
                        Facebook
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorityLogin;
